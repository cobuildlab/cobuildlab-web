import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../../components/button';
import { Titlespan, Description } from '../../components/title';
import Image from '../../components/image';
import BannerImg1 from '../../../../assets/images/banner/bannerimg.png';
import Shape2 from '../../../../assets/images/banner/bg-wave.svg';
import Shape3 from '../../../../assets/images/banner/wave.png';
import styles from './css/index.module.scss';


const Banner = (props) => {
  const BannerAnimationImages = useStaticQuery(graphql`
    query BackgroundImages {
      allDataJson {
        edges {
          node {
            bannerranimation {
              img
            }
          }
        }
      }
    }
  `);

  return (
    <Section className={styles.banner_wrapper}>
      <div className={styles.slider_animation_images}>
        {BannerAnimationImages.allDataJson.edges[0].node.bannerranimation.map((img, index) => (
          <span className={styles[`image${index + 1}`]} key={`banner-${index}`}>
            <Image Path={img.img} />
          </span>
        ))}
      </div>
      <Container>
        <Columns isDisplay="flex">
          <Column isSize={6}>
            <div className={styles.container}>
              <div className={styles.banner_content}>
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
                </div>
              </div>
            </div>
          </Column>
          <Column isHidden="mobile" isSize={6}>
            <div className={styles.container}>
              <div className={styles.banner_image}>
                <Image Path={BannerImg1} Class={styles.banner_img} />
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
    </Section>
  );
};

export default Banner;
