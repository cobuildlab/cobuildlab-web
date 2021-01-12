import React from 'react';
import { Container, Hero, HeroHeader, Section, Columns } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';
import SeoMetaTags from '../components/SeoMetaTags';

import ServicesHeader from '../components/services/ServicesHeader';
import ServicesCardSoftware from '../components/services/card/ServicesCardSoftware';
import ServicesCardProduct from '../components/services/card/ServicesCardProduct';
import ServicesCardTraining from '../components/services/card/ServicesCardTraining';
import ServicesCardAgile from '../components/services/card/ServicesCardAgile';

import Contact from '../components/2020/HomePageContact';
import ServicesBannerBackgroundTop from '../components/services/ServicesBannerBackgroundTop';
import ServicesBannerBackgroundBottom from '../components/services/ServicesBannerBackgroundBottom';

const Services = () => (
  <Layout>
    <SeoMetaTags title="Services" description="Privacy Policy for the Cobuild Lab" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
    </Hero>
    <Section>
      <ServicesBannerBackgroundTop />
      <ServicesBannerBackgroundBottom />
      <Container>
        <ServicesHeader />
      </Container>
    </Section>
    <Section>
      <Columns isCentered>
        <ServicesCardProduct />
        <ServicesCardSoftware />
      </Columns>
      <Columns isCentered>
        <ServicesCardTraining />
        <ServicesCardAgile />
      </Columns>
    </Section>
    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
);

export default Services;
