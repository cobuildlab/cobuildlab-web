import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import Typography from '../../2020/Typography';
import BannerButtons from '../button/BannerButtons';
import AnimationImages from '../AnimationImages';
import '../../../assets/2021/scss/style1.scss';
import styled from 'styled-components';

import img1 from '../../../assets/images/banner/animation/1.png';
import img2 from '../../../assets/images/banner/animation/2.png';
import img3 from '../../../assets/images/banner/animation/3.png';
import img4 from '../../../assets/images/banner/animation/4.png';
import img5 from '../../../assets/images/banner/animation/5.png';
import img6 from '../../../assets/images/banner/animation/6.png';
import img7 from '../../../assets/images/banner/animation/7.png';
import img8 from '../../../assets/images/banner/animation/8.png';
import img9 from '../../../assets/images/banner/animation/9.png';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

export const SectionsWrapper = styled.div`
  position: relative;
  padding-bottom: calc(1px + 110 * (100vw - 320px) / 1600);
`;

const images = [
  <AnimationImages src={img1} key={0} index={0} height={'52'} width={'52'} />,
  <AnimationImages src={img2} index={1} key={1} height={'355'} width={'363'} />,
  <AnimationImages src={img3} index={2} key={2} height={'13'} width={'12'} />,
  <AnimationImages src={img4} index={3} key={3} height={'24'} width={'23'} />,
  <AnimationImages src={img5} index={4} key={4} height={'34'} width={'33'} />,
  <AnimationImages src={img6} index={5} key={5} height={'221'} width={'215'} />,
  <AnimationImages src={img7} index={6} key={6} height={'218'} width={'223'} />,
  <AnimationImages src={img8} index={7} key={7} height={'319'} width={'245'} />,
  <AnimationImages src={img9} index={8} key={8} height={'225'} width={'225'} />,
];

const subTitle = {
  default: {
    level: 8,
    fontWeight: 'bold',
  },
};

const Banner = ({ title1, title2 }) => {
  const animation = images.map((node) => node);

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
                      {title1}
                      <br />
                      {title2}
                      <br />
                      <Typography size={subTitle} tag="h1">
                        Let’s Build a Great Idea.
                      </Typography>
                      <br />
                      <div className="banner-btn-wrapper">
                        <BannerButtons />
                      </div>
                    </div>
                  </div>
                </Column>
                <Column isHidden="mobile" isSize={5}>
                  <StaticImage
                    alt={'Banner'}
                    src={'../../../assets/2021/images/group-banner-2.png'}
                  />
                </Column>
              </Columns>
            </Container>
          </div>
        </div>
      </SectionsWrapper>
    </Section>
  );
};

Banner.propTypes = {
  title1: PropTypes.element.isRequired,
  title2: PropTypes.element.isRequired,
};

export { Banner };
