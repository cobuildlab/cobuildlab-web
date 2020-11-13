import React from 'react';
import { Container, Column, Columns } from 'bloomer';
import styled from 'styled-components';
import LinkButtonDefault from './buttons/LinkButtonDefault';
import Image from './Image';
import VideoPlayIcon from './VideoPlayIcon';
import H6 from '../Typography/H6';
import Paragraph from '../Typography/Paragraph';
import { TextOrange } from '../Typography/TextHelpers';
import BannerBackground from './BannerBackground';
import comic from '../../resources/2020/home/cobuildlab-home.svg';
import commonStyles from '../Typography/common-styles';
import colors from '../Typography/colors.json';

const HeroContainer = styled.div`
  position: relative;
  padding-top: 0em;
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
  justify-content: center;
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

const H1 = styled.h1`
  ${commonStyles}
  font-weight: bold;
  font-family: 'Lato-bold', sans-serif;
  font-size: calc(35px + (100 - 45) * ((100vw - 320px) / (1920 - 320)));
  color: ${colors.indigo};
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
              <H1>
                We partner with <TextOrange>entrepreneurs,</TextOrange> and{' '}
                <TextOrange>Industry Experts</TextOrange> to transform ideas into Web and Mobile
                Software Products.
              </H1>
            </HeroWrapper>
            <Paragraph>
              Let’s <TextOrange>Build</TextOrange> a <br />
              Great <TextOrange> Idea.</TextOrange>
              <br />
              <br />
              From day one, our technique is focused on early results and transparent communication.
            </Paragraph>
            <ButtonWrapper>
              <LinkButtonDefault to="/enterprise">Business Services</LinkButtonDefault>
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
