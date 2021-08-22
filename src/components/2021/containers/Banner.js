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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const subTitle = {
  default: {
    level: 8,
    fontWeight: 'bold',
  },
};

const Banner = ({ title1, title2 }) => {
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
                  <StaticImage src={'../../../assets/2021/images/group-banner-2.png'} />
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
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};

export { Banner };
