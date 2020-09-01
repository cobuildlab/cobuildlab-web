import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Section } from 'bloomer';
import Img from 'gatsby-image';
import Typrography from '../../../2020/Typography';
import BannerButtons from './BannerButtons';
import AnimationImages from './AnimationImages';
import { SectionsWrapper } from './banner-styles';
import styled from 'styled-components';
import './banner.scss';

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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const title = {
  default: {
    level: 4,
    fontWeight: 'bold',
  },
  lg: {
    level: 1,
    fontWeight: 'bold',
  },
};

const subTitle = {
  default: {
    level: 8,
    fontWeight: 'bold',
  },
};

const Nut = styled.img`
  width: 30px;
  height: 30px;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

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
                        A PROCESS AND WORKFLOW AUTOMATION COMPANY
                      </Typrography>
                      <Typrography size={title} tag="h1">
                        Let’s <span className="entegitrprise-text-orange">Build</span> a <br />
                        Great<span className=" enterprise-text-orange"> Idea.</span>
                      </Typrography>
                      <br />
                      <Typrography size={subTitle} tag="h1">
                        We build Custom Software Solutions to transform logistical and productivity
                        problems into competitive advantages.
                      </Typrography>
                      <br />
                      <Typrography size={subTitle} tag="p" className="banner-dec">
                        At Cobuild Lab, we`ve been helping business owners an executives get past
                        these challenges and turn them into:
                        <br />
                        <br />
                        <ul>
                          <Li>
                            <Nut src={nut} alt="nut" title="Nut" />
                            Competitive Advantages
                          </Li>
                          <Li>
                            <Nut src={nut} alt="nut" title="Nut" />
                            Increased operational capacity
                          </Li>
                          <Li>
                            <Nut src={nut} alt="nut" title="Nut" />
                            Errors reduction
                          </Li>
                          <Li>
                            <Nut src={nut} alt="nut" title="Nut" />
                            Costs optimization
                          </Li>
                        </ul>
                      </Typrography>
                      <div className="banner-btn-wrapper">
                        <BannerButtons />
                      </div>
                    </div>
                  </div>
                </Column>
                <Column isHidden="mobile" isSize={6}>
                  <Img fluid={data.heroImages.childImageSharp.fluid} alt="" />
                </Column>
              </Columns>
            </Container>
          </div>
        </div>
        <div id="services-anchor"></div>
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
