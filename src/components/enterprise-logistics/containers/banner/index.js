import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Section } from 'bloomer';
import Img from 'gatsby-image';
import Typrography from '../../../2020/Typography';
import BannerButtons from './BannerButtons';
import AnimationImages from './AnimationImages';
import './banner.scss';
import styled from 'styled-components';

import img1 from '../../../../assets/images/banner/animation/1.png';
import img2 from '../../../../assets/images/banner/animation/2.png';
import img3 from '../../../../assets/images/banner/animation/3.png';
import img4 from '../../../../assets/images/banner/animation/4.png';
import img5 from '../../../../assets/images/banner/animation/5.png';
import img6 from '../../../../assets/images/banner/animation/6.png';
import img7 from '../../../../assets/images/banner/animation/7.png';
import img8 from '../../../../assets/images/banner/animation/8.png';
import img9 from '../../../../assets/images/banner/animation/9.png';
import nut from '../../../../assets/images/team/nut.svg';

export const SectionsWrapper = styled.div`
  position: relative;
  padding-bottom: calc(1px + 110 * (100vw - 320px) / 1600);
`;

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const title = {
  default: {
    level: 8,
    fontWeight: 'bold',
  },
  lg: {
    level: 6,
    fontWeight: 'bold',
  },
};

const subTitle = {
  default: {
    level: 8,
    fontWeight: 'bold',
  },
};

const Banner = () => {
  const data = useStaticQuery(query);

  const animation = images.map((node, index) => (
    <AnimationImages src={node} key={index} index={index} />
  ));

  return (
    <Section isPaddingless id="banner">
      <SectionsWrapper>
        <div className="banner-wrapper demo1">
          <div className="banner-outer">
            <div className="slider-animation-images">{animation}</div>
            <Container>
              <Columns isDisplay="flex">
                <Column isSize={6}>
                  <div className="row">
                    <div className="banner-content">
                      <Typrography tag="h2" className="sitemain-subtitle">
                        A SOFTWARE DEVELOPMENT COMPANY
                      </Typrography>
                      <br />
                      <Typrography size={title} tag="h2">
                        We partner with{' '}
                        <span className="enterprise-text-orange">Entrepreneurs</span> and{' '}
                        <span className="enterprise-text-orange">Industry Experts</span> to
                        transform ideas into Web and Mobile Custom Software Solutions.
                      </Typrography>
                      <br />
                      <Typrography size={subTitle} tag="h1">
                        Let’s <span className="enterprise-text-orange">Build</span> a Great
                        <span className="enterprise-text-orange"> Idea.</span>
                      </Typrography>
                      <br />
                      <div className="banner-btn-wrapper">
                        <BannerButtons />
                      </div>
                    </div>
                  </div>
                </Column>
                <Column isHidden="mobile" isSize={5}>
                  <Img fluid={data.heroImages.childImageSharp.fluid} alt="" />
                </Column>
              </Columns>
            </Container>
          </div>
        </div>
      </SectionsWrapper>
    </Section>
  );
};

const query = graphql`
  query {
    heroImages: file(relativePath: { eq: "banner/group-banner-2.png" }) {
      childImageSharp {
        fluid(webpQuality: 72) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Banner;
