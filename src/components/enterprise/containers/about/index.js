import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import { Subtitle, Description, Titlespan2 } from '../../components/title';
import Button from '../../components/button';
import Image from '../../components/image';
import AboutImg from '../../../../assets/images/about/about-img.png';
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
                  <Subtitle Class="sitemain-subtitle" Name="Business solution" />
                  <Subtitle Class="site-subtitle2" Name="We gives you the best" />

                  <Description
                    Class="about-dec about-dec-1"
                    Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown dummy text of the printing"
                  />
                  <Titlespan2 Class="about-twosub-title" Name="What we can help you" Label="Achive" />
                  <Description
                    Class="about-dec"
                    Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
                  />
                  <Button
                    Class="button1 button4 btn"
                    Name="HIRE US NOW"
                    Title="gradient-color"
                    BtnIcon="btn-icon gradient-color1"
                  />
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
