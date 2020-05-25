import React from 'react';
import { Hero, HeroHeader, HeroBody, Section as BloomerSection } from 'bloomer';
import styled from 'styled-components';
import SeoMetaTags from '../components/SeoMetaTags';
import Layout from '../components/2020/Layout';
import Header from '../components/2020/header/Header';
import PricingHero from '../components/pricing/PricingHero';

import CalculatorSection from '../components/calculator/sections/CalculatorSection';
import PricingContact from '../components/pricing/PricingContact';

const Section = styled(BloomerSection)`
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;

const Pricing = () => {
  return (
    <Layout>
      <SeoMetaTags />
      <Hero>
        <HeroHeader>
          <Header />
        </HeroHeader>
        <HeroBody>
          <PricingHero />
        </HeroBody>
      </Hero>
      <Section>
        <CalculatorSection />
      </Section>
      <Section>
        <PricingContact />
      </Section>
    </Layout>
  );
};

export default Pricing;
