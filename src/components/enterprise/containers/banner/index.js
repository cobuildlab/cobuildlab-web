import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import Typography from '../../../2020/Typography';
import BannerButtons from './BannerButtons';
import AnimationImages from './AnimationImages';
import { SectionsWrapper } from './banner-styles';
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
import { StaticImage } from 'gatsby-plugin-image';

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
    fontWeight: 'normal',
  },
};

const Banner = () => {
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
                      <Typography tag="h2" className="sitemain-subtitle">
                        A PROCESS AND WORKFLOW AUTOMATION COMPANY
                      </Typography>
                      <Typography size={title} tag="h1">
                        Let’s <span className="entegitrprise-text-orange">Build</span> a <br />
                        Great<span className=" enterprise-text-orange"> Idea.</span>
                      </Typography>
                      <Typography size={subTitle} tag="p" className="banner-dec">
                        We transform Small and Medium-sized businesses by automating manual
                        processes and tasks into optimized and streamlined workflows with Web and
                        Mobile custom software.
                      </Typography>
                      <br />
                      <Typography size={subTitle} tag="p" className="banner-dec">
                        At Cobuild Lab, we’ve been helping business owners, CTO’s, COO’s and IT
                        leaders get past the techno-speak and help them take a business process and
                        turn it into a custom software solution.
                      </Typography>
                      <div className="banner-btn-wrapper">
                        <BannerButtons />
                      </div>
                    </div>
                  </div>
                </Column>
                <Column isHidden="mobile" isSize={6}>
                  <StaticImage src={'../../../../assets/2021/images/group-banner-2.png'} />
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

export default Banner;
