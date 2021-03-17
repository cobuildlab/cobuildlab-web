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
          title={'Technical Analysis For Software Startup Investors'}
          paragraph={
            'In which startup do I invest? What do I need to understand the use and distribution of my resources in the development project?  How to recognize what points to improve in the development of a startup that I supported financially? Those questions have an answer: Technical Analysis for Software Startups Investors which includes the product roadmap, risk, and feasibility analysis, and soft security audit.\n'
          }
          paragraph2={''}
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Get a Technical Analysis '}
          titleOrange={'for Software Startups Investors'}
          textList={'And forget about:\n'}
          listLeft={[
            'High risks in the business model.',
            'Supporting not viable ideas.',
            'Confidentiality and cybersecurity issues with the app.',
          ]}
          listRight={[
            'Uncertainty about the development process.',
            'Lack of knowledge about the product or industry.',
          ]}
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'How I benefit from a Technical Analysis for Software Startups Investors\n'}
          otherText={
            'Comprehensive knowledge about risks, legal aspects, burning rate, probabilities, industry, and market information. \n' +
            'Access to the timeline. Estimates, essential data, business goals, development strategies, among other data that you should know. \n'
          }
          otherText2={
            'Check on the status of certificates, backups, encryptions, everything necessary to ensure cybersecurity at a medium level.'
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Who would best take advantage of this service?'}
          leftText={['Banks', 'Government Agencies', 'Angel Investors']}
          rightTextList={['Accelerators and Incubators', 'Venture Capital firms']}
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
