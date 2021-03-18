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

const FieldServicesManagementSystem = () => (
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
          title={'Field Services Management System'}
          paragraph={
            'Track and manage field operations better than you are currently doing with a field service management system customized to your activities. In this new era, real time tracking and communication are the key to maximize earnings and customer satisfaction.'
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/iconos-Small-Business-Field-Service-Management-System.svg'
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
          title={'Custom your Field '}
          titleOrange={'Service Management System'}
          textList={'And avoid:'}
          listLeft={[
            'Unnecessary or missing features.',
            'Challenges storing data.',
            'Security failures.',
            'Complexity to track all field activities.',
          ]}
          listRight={[
            'Lack of reports or statistics to make strategic decisions.',
            'Communication and coordination (schedule)  problems.',
            'Challenges planning ahead.',
          ]}
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Improve your field operations by hiring us'}
          textList={[
            "We've strong engineering background in solving business problems with software solutions.",
            'Combined over 50 years of experience developing software products.',
            'Super goal-oriented (software focuses on their business outcomes, not just a technology shop)',
            'We have a zero-waste process',
          ]}
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Who can get the most out of a customized Field Service Management System?\n'}
          leftText={[
            'Service Companies',
            'Transportation Companies',
            'Logistics or supply chain companies',
            'Warehouses',
          ]}
          rightTextList={[
            'Factories and industries',
            'Telecommunications',
            'Engineering and construction',
            'Healthcare',
          ]}
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

export default FieldServicesManagementSystem;
