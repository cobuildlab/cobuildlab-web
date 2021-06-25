import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import Typography from '../2020/Typography';
import BannerButtons from '../2021/button/BannerButtons';
import AnimationImages from '../2021/AnimationImages';
import '../../assets/2021/scss/style1.scss';
import styled from 'styled-components';

import img1 from '../../assets/images/banner/animation/1.png';
import img2 from '../../assets/images/banner/animation/2.png';
import img3 from '../../assets/images/banner/animation/3.png';
import img4 from '../../assets/images/banner/animation/4.png';
import img5 from '../../assets/images/banner/animation/5.png';
import img6 from '../../assets/images/banner/animation/6.png';
import img7 from '../../assets/images/banner/animation/7.png';
import img8 from '../../assets/images/banner/animation/8.png';
import img9 from '../../assets/images/banner/animation/9.png';
import NewLandingForm from '../2020/NewLandingForm';

export const SectionsWrapper = styled.div`
  position: relative;
  padding-bottom: calc(1px + 110 * (100vw - 320px) / 1600);
`;

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const ANIMATION = images.map((node, index) => (
  <AnimationImages src={node} key={index} index={index} />
));

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
  return (
    <Section isPaddingless id="banner">
      <SectionsWrapper>
        <div className="slider-animation-images">{ANIMATION}</div>
        <Container>
          <Columns isDisplay="flex" isVCentered>
            <Column isSize={6}>
              <Typography tag="h2" className="sitemain-subtitle">
                A SOFTWARE DEVELOPMENT COMPANY
              </Typography>
              <br />
              <Typography size={title} tag="h2">
                We partner with <span className="enterprise-text-orange">Industry Experts</span> and{' '}
                to solve Logistical and Productivity problems with
                <span className="enterprise-text-orange">
                  {' '}
                  Custom Software Solutions, Artificial Intelligence and IoT.
                </span>{' '}
              </Typography>
              <br />
              <Typography size={subTitle} tag="h1">
                Let’s <span className="enterprise-text-orange">Build</span> a Great
                <span className="enterprise-text-orange"> Idea.</span>
              </Typography>
              <br />
              <div className="banner-btn-wrapper">
                <BannerButtons />
              </div>
            </Column>
            <Column isHidden="mobile" isSize={5}>
              <br />
              <NewLandingForm landingName={'logistics'} />
            </Column>
          </Columns>
        </Container>
      </SectionsWrapper>
    </Section>
  );
};

export { Banner };
