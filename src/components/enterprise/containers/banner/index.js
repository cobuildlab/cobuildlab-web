import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import Image from '../../components/image';
import BannerImg1 from '../../../../assets/images/banner/group-banner-2.png';
import Shape2 from '../../../../assets/images/banner/bg-wave.svg';
import Shape3 from '../../../../assets/images/banner/wave.png';
import Typrography from '../../../2020/Typography';
import Button from '../../../2020/Button';

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
  // const BannerAnimationImages = useStaticQuery(graphql`
  //   query BackgroundImages {
  //     allDataJson {
  //       edges {
  //         node {
  //           bannerranimation {
  //             img
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
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
    <Section isPaddingless>
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
                    <Typrography size={title} tag="h1">
                      Let’s <span className="enterprise-text-orange">Build</span> a <br />
                      Great<span className=" enterprise-text-orange"> Idea.</span>
                    </Typrography>
                    <Typrography size={subTitle} tag="p" className="banner-dec">
                      A team or UX/UI Designers, Project Managers, Senior Developers, <br />
                      and QA Engineers are waiting to make your idea come alive
                    </Typrography>
                    <div className="banner-btn-wrapper">
                      <div className="banner-btn-item">
                        <Button> GET STARTED </Button>
                      </div>
                      <div className="banner-btn-item">
                        <Button type="primary"> Read more </Button>
                      </div>
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
          {(props.ChangeClass === 'demo2' || props.ChangeClass === 'demo3') && (
            <div className="bottom-img">
              {props.ChangeClass === 'demo2' ? <Image Path={Shape2} /> : <Image Path={Shape3} />}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Banner;

/**
 * 
 *    <div className={styles.banner_content}>
                <Titlespan
                  Class={styles.banner_main_title}
                  Label="WE ARE"
                  Name="CREATIVE BUSINESS AGENCY"
                />
                <Description
                  Class={styles.banner_dec}
                  Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                />
                <div className="banner-btn-wrapper">
                  <Button Class="button1 button3 btn" Name="LEARN MORE" />
                  <Button
                    Class="button1 button4 btn"
                    Name="GET STARTED"
                    Title="gradient-color"
                    BtnIcon="btn-icon gradient-color1"
                  />
                </div>.
              </div>.
 * 
 * 
 */
