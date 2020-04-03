import React from 'react';
import { Container, Column, Columns } from 'bloomer';
import styled from 'styled-components';
import Button from '../Button';
import Image from '../Image';
import HeroPlayIcon from './HeroPlayIcon';
import Hero from '../../Typography/H1';
import H6 from '../../Typography/H6';
import Paragraph from '../../Typography/Paragraph';
import { TextOrange } from '../../Typography/TextHelpers';
import BannerBackground from '../BannerBackground';
import comic from '../../../resources/2020/home/cobuildlab-home.svg';
import styles from './css/index.module.scss';


const HeroWrapper = styled.div`
  padding: 1em 0;
`;

const HeroBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  @media screen and (max-width: 768px){
    text-align: center;
  }
`;

const ImagesContainer = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  margin-top: 25px;
  @media all and (max-width: 767.99px){
    display: flex;
    justify-content: center;
  }
`;

const HeroSection = () => (
  <div className={styles.hero_body}>
    <BannerBackground />
    <Container>
      <Columns isCentered>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <HeroBody>
            <H6>Software Development Company</H6>
            <HeroWrapper>
              <Hero >
                Let’s <TextOrange >Build</TextOrange> a <br />
                Great <TextOrange > Idea.</TextOrange>
              </Hero>
            </HeroWrapper>
            <Paragraph>
              We partner with new and early-stage entrepreneurs and industry experts to transforms
              ideas into{' '}
              <br />
              <br />
              Since day one, our technique is focused on early results and transparent
              communication.
            </Paragraph>
            <ButtonWrapper>
              <Button to="/blog/best-software-development-process/">
                Read More
              </Button>
            </ButtonWrapper>
          </HeroBody>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <ImagesContainer>
            <HeroPlayIcon />
            <Image alt="main comic" src={comic} />
          </ImagesContainer>
        </Column>
      </Columns>
    </Container>
  </div>
);

export default HeroSection;


/* 


              <TextOrange>Web and Mobile Software Products.</TextOrange>


*/