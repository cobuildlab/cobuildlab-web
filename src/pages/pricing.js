import React from 'react';
import { Hero, HeroHeader, HeroBody } from 'bloomer';
import SeoMetaTags from '../components/SeoMetaTags';
import Layout from '../components/2020/Layout';
import Header from '../components/2020/header/Header';
import PricingHero from '../components/pricing/PricingHero';
import CalculatorContainer from '../components/pricing/calculator/CalculatorContainer';
import Calculator from '../components/pricing/calculator/CalculatorSection';

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
        <CalculatorContainer>
          <Calculator.Section>
            <Calculator.Title isSize={{ mobile: 12, desktop: 8 }}>Platform</Calculator.Title>
            <Calculator.ColumnTitle isSize={{ mobile: 12, desktop: 4 }}>
              Amount
            </Calculator.ColumnTitle>
          </Calculator.Section>
          <Calculator.Section>
            <Calculator.Title isSize={{ mobile: 12, desktop: 8 }}>Design</Calculator.Title>
          </Calculator.Section>
          <Calculator.Section>
            <Calculator.Title isSize={{ mobile: 12, desktop: 8 }}>Security</Calculator.Title>
          </Calculator.Section>
        </CalculatorContainer>
      </Hero>
    </Layout>
  );
};

export default Pricing;
