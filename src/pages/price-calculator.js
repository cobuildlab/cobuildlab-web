import React, { useState, useCallback } from 'react';
import { Hero, HeroHeader, HeroBody, Section as BloomerSection } from 'bloomer';
import styled from 'styled-components';
import SeoMetaTags from '../components/SeoMetaTags';
import Layout from '../components/2020/Layout';
import Header from '../components/2020/header/Header';
import PricingHero from '../components/price-calculator/PricingHero';

import CalculatorSection from '../components/calculator/sections/CalculatorSection';
import PricingContact from '../components/price-calculator/PricingContact';

const Section = styled(BloomerSection)`
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;

const PriceCalculator = () => {
  const [calculatorData, setCalculatorData] = useState({});

  const onGetData = useCallback((data) => {
    setCalculatorData(data);
  }, []);

  return (
    <Layout>
      <SeoMetaTags
        title="Price Calculator"
        description="Estimate the cost of your web or mobile application with this Price Calculator"
      />
      <Hero>
        <HeroHeader>
          <Header />
        </HeroHeader>
        <HeroBody>
          <PricingHero />
        </HeroBody>
      </Hero>
      <Section>
        <CalculatorSection getData={onGetData} />
      </Section>
      <Section>
        <PricingContact id="#contact" calculatorData={calculatorData} />
      </Section>
    </Layout>
  );
};

export default PriceCalculator;
