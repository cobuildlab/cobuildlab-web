import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../../components/button';
import { Titlespan, Description } from '../../components/title';
import Image from '../../components/image';
import BannerImg1 from '../../../../assets/enterprise-2020/images/banner/bannerimg.png';
import Shape2 from '../../../../assets/enterprise-2020/images/banner/bg-wave.svg';
import Shape3 from '../../../../assets/enterprise-2020/images/banner/wave.png';
import './banner.scss';

/**
 * @param props
 */
function Banner(props) {
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
    <section className={`banner-wrapper ${props.ChangeClass}`} id="home">
      <div className="banner-outer">
        <div className="slider-animation-images">
          {BannerAnimationImages.allDataJson.edges[0].node.bannerranimation.map((img, index) => (
            <span className={`image${index + 1}`} key={`banner-${index}`}>
              <Image Path={img.img} />
            </span>
          ))}
        </div>
        <Container>
          <Row>
            <Col md={6}>
              <div className="banner-content">
                <Titlespan
                  Class="banner-main-title"
                  Label="WE ARE"
                  Name="CREATIVE BUSINESS AGENCY"
                />
                <Description
                  Class="banner-dec"
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
            </Col>
            <Col md={6}>
              <div className="banner-image">
                <Image Path={BannerImg1} Class="banner-img" />
              </div>
            </Col>
          </Row>
        </Container>

        {(props.ChangeClass === 'demo2' || props.ChangeClass === 'demo3') && (
          <div className="bottom-img">
            {props.ChangeClass === 'demo2' ? <Image Path={Shape2} /> : <Image Path={Shape3} />}
          </div>
        )}
      </div>
    </section>
  );
}

export default Banner;
