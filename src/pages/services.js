import React from 'react';
import { Container, Hero, HeroHeader, Section, HeroBody as BloomerHeroBody } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../components/2020/Layout';
import Header from '../components/2020/header/Header';
import SeoMetaTags from '../components/SeoMetaTags';

import ServicesProductDevelopment from '../components/services/ServicesProductDevelopment';
import ServicesSoftwareDevelopment from '../components/services/ServicesSoftwareDevelopment';
import ServicesTraining from '../components/services/ServicesTraining';
import ServicesAgileProjectManagement from '../components/services/ServicesAgileProjectManagement';

import H1 from '../components/Typography/H1';
import styled from 'styled-components';
import Contact from '../components/2020/HomePageContact';

const HeroBody = styled(BloomerHeroBody)`
  position: relative;
`;

const Title = styled(H1)`
  text-align: center;
  margin-top: 0.5em;
`;

const Services = () => (
  <Layout>
    <SeoMetaTags title="Services" description="Privacy Policy for the Cobuild Lab" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
      <HeroBody>
        <Container>
          <Title>Services</Title>
        </Container>
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <ServicesProductDevelopment />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSoftwareDevelopment />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesTraining />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesAgileProjectManagement />
      </Container>
    </Section>
    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
);

export default Services;
