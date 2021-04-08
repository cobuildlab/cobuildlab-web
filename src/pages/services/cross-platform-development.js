import React from 'react';
import { Columns, Container, Hero, HeroHeader, Section } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../../components/2020/Layout';
import Header from '../../components/header/Header';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';

import ServicesHeader from '../../components/services/details/ServicesHeader';

import Contact from '../../components/2020/HomePageContact';
import ServicesBannerBackgroundBottom from '../../components/services/ServicesBannerBackgroundBottom';
import styled from 'styled-components';

import ServicesSection3 from '../../components/services/details/ServicesSection3';
import ServicesSection4 from '../../components/services/details/ServicesSection4';
import Title2 from '../../components/Title2';
import ServicesSection2 from '../../components/services/details/ServicesSection2';
import { StaticImage } from 'gatsby-plugin-image';

import JobCore from '../../components/services/details/customer-success-stories/card/JobCore';
import Pitazo from '../../components/services/details/customer-success-stories/card/Pitazo';
import Weedmatch from '../../components/services/details/customer-success-stories/card/Weedmatch';

const StyledSubTitle = styled.div`
  text-align: center;
`;

const StyledSection2 = styled(Section)`
  background: #fff;
`;

const StyledContainer = styled(Container)`
  padding-top: 4px;
  padding-bottom: 75px;
`;

const CrossPlatformDevelopment = () => (
  <Layout>
    <SeoMetaTags title="Services" description="Privacy Policy for the Cobuild Lab" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
    </Hero>
    <Section>
      <ServicesBannerBackgroundBottom />
      <Container>
        <ServicesHeader
          title={'Cross-Platform Development'}
          paragraph={
            'Only cross-platform development provides you with the flexibility to build your app and use it in various devices. Let your app work across multiple platforms like Android or IOS.'
          }
          paragraph2={<>Request a Call, Contact us now, Get a FREE Consultation.</>}
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/iconos-Main-Services-Cross-Platform-Development.svg'
              }
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Get faster'}
          titleOrange={'into the Market'}
          text={
            'It is ideal for prototyping because it allows a faster time to market on more than one platform and allows the owner to collect user feedback, establish a position in the market and establish a position with consumers before any other competitor.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'You’ll only need one development team, Us!'}
          otherText={
            'We are a single development team with hands-on experience working with different sets of technologies. Having us as a unique team handling all the stages of the project, you avoid a scenario where too many work teams risk sabotaging one another and compromise the app project itself.'
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Why a Cross-Platform App?'}
          leftText={[
            'Launch your software simultaneously on various platforms.',
            'Time to market is reduced since developing one program takes a lot less time than building two or three apps for each device platform.',
            'Faster and easier updates.',
          ]}
          rightTextList={[
            'Uniformity increases between different operating systems creating a more seamless user experience.',
            'Cross-platform apps are internet-based, so users don’t have to download separate updates.',
          ]}
        />
      </Container>
    </Section>
    <StyledSection2>
      <StyledContainer>
        <StyledSubTitle>
          <Title2>Customer Success Stories</Title2>
        </StyledSubTitle>
        <Columns isCentered>
          <JobCore />
          <Weedmatch />
          <Pitazo />
        </Columns>
      </StyledContainer>
    </StyledSection2>
    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
);

export default CrossPlatformDevelopment;
