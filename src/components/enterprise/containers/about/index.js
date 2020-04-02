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
                      Software Development
                    </Typrography>
                    {/*<Typrography tag="h3" className="about-dec about-dec-1">*/}
                    {/*  Since 2012 we've focused on developing and combining agile techniques, tools, and technologies to*/}
                    {/*  increase development speed to deliver faster results!*/}
                    {/*</Typrography>*/}
                    {/*<Typrography tag="h3" className="site-subtitle2">*/}
                    {/*  We give you the best:*/}
                    {/*</Typrography>*/}
                  </div>

                  <ul>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Quality apps utilizing modern technologies
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Rapid development and feature-rich
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Custom mobile and cloud solutions
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Easy, inspiring development process
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ iOS and Android experience
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Testing and Survey Services
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Marketing and Launch Services
                      </Typrography>
                    </li>
                  </ul>

                  {/*<Typrography className="about-dec">*/}
                  {/*  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem*/}
                  {/*  Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,*/}
                  {/*  when an*/}
                  {/*</Typrography>*/}
                  <div className="about-button-container">
                    <Buttom>See more</Buttom>
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
