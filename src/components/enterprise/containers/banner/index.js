import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import Image from '../../components/image';
import BannerImg1 from '../../../../assets/images/banner/group-banner-2.png';
import Typrography from '../../../2020/Typography';
import ButtonSmoothScrolling from '../../../2020/Button/ButtonSmoothScrolling';

import './banner.scss';
import anim1 from './1-blue.png';
import anim2 from './2-blue.png';
import anim3 from './3-blue.png';
import anim4 from './4-blue.png';
import anim5 from './5-blue.png';
import anim6 from './6-orange.png';
import anim7 from './7-blue.png';
import anim8 from './8-blue.png';
import anim9 from './9-blue.png';

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

const Banner = (props) => {
  const bannerAnimationImages = [
    {
      img: anim1,
    },
    {
      img: anim2,
    },
    {
      img: anim3,
    },
    {
      img: anim4,
    },
    {
      img: anim5,
    },
    {
      img: anim6,
    },
    {
      img: anim7,
    },
    {
      img: anim8,
    },
    {
      img: anim9,
    },
  ];
  return (
    <Section isPaddingless id="banner">
      <div className="banner-wrapper demo1">
        <div className="banner-outer">
          <div className="slider-animation-images">
            {bannerAnimationImages.map((img, index) => (
              <span className={`image${index + 1}`} key={`banner-${index}`}>
                <Image Path={img.img} />
              </span>
            ))}
            {/* {BannerAnimationImages.allDataJson.edges[0].node.bannerranimation.map((img, index) => (
              <span className={`image${index + 1}`} key={`banner-${index}`}>
                <Image Path={img.img} />
              </span>
            ))} */}
          </div>
          <Container>
            <Columns isDisplay="flex">
              <Column isSize={6}>
                <div className="row">
                  <div className="banner-content">
                    <Typrography tag="h2" className="sitemain-subtitle">
                      A PROCESS AND WORKFLOW AUTOMATION COMPANY
                    </Typrography>
                    <Typrography size={title} tag="h1">
                      Let’s <span className="enterprise-text-orange">Build</span> a <br />
                      Great<span className=" enterprise-text-orange"> Idea.</span>
                    </Typrography>
                    <Typrography size={subTitle} tag="p" className="banner-dec">
                      We transform Small and Medium size businesses by automating your processes
                      into optimized, and streamlined workflows with Web and Mobile custom software.
                    </Typrography>
                    <br />
                    <Typrography size={subTitle} tag="p" className="banner-dec">
                      At Cobuild Lab, we`ve been helping business owners, CTO`s, COO`s and IT
                      leaders get past the techno-speak and help them take a business process and
                      turn it into a custom software solution.
                    </Typrography>
                    <div className="banner-btn-wrapper">
                      <ButtonSmoothScrolling href="#services">
                        Explore Our Services
                      </ButtonSmoothScrolling>
                    </div>
                  </div>
                </div>
              </Column>
              <Column isHidden="mobile" isSize={6}>
                <div className="row">
                  <div className="banner-image">
                    <Image Path={BannerImg1} Class="banner-img" />
                  </div>
                </div>
              </Column>
            </Columns>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
