import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import Typrography from '../2020/Typography';
import BannerButtons from '../enterprise-logistics/containers/banner/BannerButtons';
import AnimationImages from '../enterprise-logistics/containers/banner/AnimationImages';
import '../enterprise-logistics/containers/banner/banner.scss';
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
// import { StaticImage } from 'gatsby-plugin-image';
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
              <Typrography tag="h2" className="sitemain-subtitle">
                A SOFTWARE DEVELOPMENT COMPANY
              </Typrography>
              <br />
              <Typrography size={title} tag="h2">
                We solve <span className="enterprise-text-orange">Logistics</span> and{' '}
                <span className="enterprise-text-orange">Productivity</span> problems with custom
                software solutions.
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
              {/*<HeroBody>*/}
              {/*  <Container hasTextAlign="centered">*/}
              {/*    <StaticImage*/}
              {/*      maxWidth={350}*/}
              {/*      maxHeight={350}*/}
              {/*      src={'../../assets/images/banner/group-banner-2.png'}*/}
              {/*      alt={'banner'}*/}
              {/*    />*/}
              {/*  </Container>*/}
              {/*</HeroBody>*/}
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
