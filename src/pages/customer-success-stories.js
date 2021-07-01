import React from 'react';
import { HeroHeader, HeroBody, Hero, Section, Container } from 'bloomer';
import styled from 'styled-components';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';

import H1 from '../components/Typography/H1';
import Paragraph from '../components/Typography/Paragraph';
import { TextOrange } from '../components/2021/text/TextHelpers';

import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';
import BannerBackground from '../components/2020/BannerBackground';
import Contact from '../components/2020/HomePageContact';
import SuccessStories from '../components/customer-success-stories/SuccessStories';

const Wrapper = styled.div`
  position: relative;
`;

const TitleContainer = styled.div`
  margin-top: 6.5em;
  & > p {
    margin-top: 3em;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    & > p {
      width: 100%;
    }
    margin-top: 2em;
  }
`;

const Description = styled(Paragraph)`
  text-align: justify;
  line-height: 1.5;
`;

const CustomesWrapper = styled.div`
  margin-bottom: 4.5em;
`;

const CustomerSuccessStoriesIndex = () => (
  <Layout>
    <SeoMetaTags
      title="Customer Success Stories"
      description="Success Cases for the Cobuild Lab in Miami"
    />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
      <HeroBody>
        <Wrapper>
          <BannerBackground />
          <Container>
            <TitleContainer>
              <H1>
                Our <TextOrange>Custom Software</TextOrange> <br />
                Success Stories
              </H1>
              <Description>
                We are proud to work alongside innovative people transforming groundbreaking ideas
                into sustainable software products. Here are some of the web platforms, mobile apps,
                custom enterprise software, and cross-platforms developed at Cobuild Lab.
              </Description>
            </TitleContainer>
          </Container>
        </Wrapper>
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <CustomesWrapper>
          <SuccessStories />
        </CustomesWrapper>
      </Container>
    </Section>
    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
);

export default CustomerSuccessStoriesIndex;
