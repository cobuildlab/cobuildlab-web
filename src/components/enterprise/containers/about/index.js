import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import Image from '../../components/image';
import AboutImg from '../../../../assets/images/banner/group-banner.png';
import Typrography from '../../../2020/Typography';
import Buttom from '../../../2020/Button';
import './about.scss';

const About = () => {
  return (
    <Section isPaddingless>
      <div className="about-wrapper gradient-color">
        <Container>
          <Columns isDisplay="flex-mobile" isCentered>
            <Column isSize={{ mobile: 11, desktop: 6 }}>
              <div className="row">
                <div className="about-content-block main-title-wrapper">
                  <div className="sub-title-wrapper">
                    <Typrography tag="h2" className="sitemain-subtitle">
                      Business solution
                    </Typrography>
                    <Typrography tag="h3" className="site-subtitle2">
                      We gives you the best
                    </Typrography>
                  </div>
                  <Typrography tag="h3" className="about-dec about-dec-1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
                    when an unknown dummy text of the printing
                  </Typrography>
                  <Typrography tag="h3" className="about-twosub-title">
                    What we can help you<span className="enterprise-text-orange">Achive</span>
                  </Typrography>
                  <Typrography className="about-dec">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                  </Typrography>
                  <div className="about-button-container">
                    <Buttom>
                      See more
                    </Buttom>
                  </div>
                </div>
              </div>
            </Column>
            <Column isSize={{ mobile: 11, desktop: 6 }} isHidden="mobile">
              <div className="row">
                <div className="about-image">
                  <Image Path={AboutImg} Class="about-img" />
                </div>
              </div>
            </Column>
          </Columns>
        </Container>
      </div>
    </Section>
  );
};

export default About;
