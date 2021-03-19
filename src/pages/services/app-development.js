import React from 'react';
import { Container, Hero, HeroHeader, Section } from 'bloomer';
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
import SuccessStories from '../../components/services/details/SuccesStories';
import Title2 from '../../components/Title2';
import ServicesSection2 from '../../components/services/details/ServicesSection2';
import { StaticImage } from 'gatsby-plugin-image';

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

const AppDevelopment = () => (
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
          title={'App Development'}
          paragraph={
            'Higher customer engagement, strong built awareness and recognition, customer loyalty improvement, and extra revenue-stream are some of the advantages you acquire when developing a mobile app.\n' +
            'This is the process in which we create an app that can work on several platforms, with the requirements your business has.\n'
          }
          paragraph2={<>Scale your business now!, Contact us now, Free consultation.</>}
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-Main-Services-APP-Development.svg'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Essential '}
          titleOrange={'for your businesses'}
          text={
            'Nowadays, a mobile app is a must-have for most businesses. We can turn your idea and transform it into a powerful app for in-house communication, real-time employee contact, workflow, and operations support.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Every business needs an app'}
          textList={[
            'Our team can build a high-quality, scalable, and powerful mobile app that runs seamlessly over various platforms and devices.',
          ]}
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Every business needs an app'}
          leftText={
            'App and cross-platform development is adapted to any industries, among those are the following:'
          }
          rightTextList={['Healthcare', 'Financial', 'Entertainment', 'Fashion and eCommerce']}
        />
      </Container>
    </Section>
    <StyledSection2>
      <StyledContainer>
        <StyledSubTitle>
          <Title2>Customer Success Stories</Title2>
        </StyledSubTitle>
        <SuccessStories />
      </StyledContainer>
    </StyledSection2>
    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
);

export default AppDevelopment;
