import React from 'react';
import { Container, Column, Columns } from 'bloomer';
import styled from 'styled-components';
import LinkButtonDefault from './Button/LinkButtonDefault';
import Image from './Image';
import VideoPlayIcon from './VideoPlayIcon';
import Hero from '../Typography/H1';
import H6 from '../Typography/H6';
import Paragraph from '../Typography/Paragraph';
import { TextOrange } from '../Typography/TextHelpers';
import BannerBackground from './BannerBackground';
import comic from '../../resources/2020/home/cobuildlab-home.svg';

const HeroContainer = styled.div`
  position: relative;
  padding-top: 2.5em;
  @media all and (max-width: 767.99px) {
    padding-top: 0em;
  }
`;

const HeroWrapper = styled.div`
  padding: 1em 0;
`;

const HeroBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ImagesContainer = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  margin-top: 25px;
  @media all and (max-width: 767.99px) {
    display: flex;
    justify-content: center;
  }
`;

const IconPlayContainer = styled.div`
  position: absolute;
  top: calc(50% + 35px);
  left: calc(50% - 70px);
  @media screen and (max-width: 768px) {
    left: calc(50% - 35px);
  }
`;

const HeroSection = () => (
  <HeroContainer>
    <BannerBackground />
    <Container>
      <Columns isCentered>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <HeroBody>
            <H6>Software Development Company</H6>
            <HeroWrapper>
              <Hero>
                Let’s <TextOrange>Build</TextOrange> a <br />
                Great <TextOrange> Idea.</TextOrange>
              </Hero>
            </HeroWrapper>
            <Paragraph>
              We partner with new and early-stage entrepreneurs and industry experts to transforms
              ideas into <br />
              <br />
              From day one, our technique is focused on early results and transparent communication.
            </Paragraph>
            <ButtonWrapper>
              <LinkButtonDefault to="/blog/best-software-development-process/">
                Read More
              </LinkButtonDefault>
            </ButtonWrapper>
          </HeroBody>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <ImagesContainer>
            <IconPlayContainer>
              <VideoPlayIcon />
            </IconPlayContainer>
            <Image alt="main comic" src={comic} />
          </ImagesContainer>
        </Column>
      </Columns>
    </Container>
  </HeroContainer>
);

export default HeroSection;

/*


              <TextOrange>Web and Mobile Software Products.</TextOrange>


*/
