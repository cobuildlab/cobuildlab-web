import React from 'react';
import { Hero, HeroHeader, HeroBody, Container, Column, Columns, Section } from 'bloomer';
import { Icon } from 'react-icons-kit';
import { android } from 'react-icons-kit/fa/android';
import SeoMetaTags from '../components/SeoMetaTags';
import Layout from '../components/2020/Layout';
import Header from '../components/2020/header/Header';
import PricingHero from '../components/pricing/PricingHero';

import CalculatorWrapper from '../components/calculator/CalculatorWrapper';

import CalculatorCellTitle from '../components/calculator/cell/CalculatorCellTitle';
import CalculatorCell from '../components/calculator/cell/CalculatorCell';

import CalculatorFeatureName from '../components/calculator/feature/CalculatorFeatureName';
import CalculatorFeatureDescription from '../components/calculator/feature/CalculatorFeatureDescription';
import CalculatorFeatureCard from '../components/calculator/feature/CalculatorFeatureCard';
import CalculatorFeatureCost from '../components/calculator/feature/CalculatorFeatureCost';

import PricingContact from '../components/pricing/PricingContact';

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
        <Section>
          <Container>
            <CalculatorWrapper>
              <Columns isMarginless>
                <Column isSize={9} isPaddingless>
                  <CalculatorCell isColor="white">
                    <CalculatorCellTitle indigo>Platform</CalculatorCellTitle>
                  </CalculatorCell>
                </Column>
                <Column isSize={3} isPaddingless>
                  <CalculatorCell>
                    <CalculatorCellTitle>Amount</CalculatorCellTitle>
                  </CalculatorCell>
                </Column>
              </Columns>
              <Columns isMarginless isMultiline>
                <Column isSize={3} isPaddingless>
                  <CalculatorCell isColor="white" isDisplay="flex" isAlign="center">
                    <CalculatorFeatureDescription>
                      Select the platform to your project
                    </CalculatorFeatureDescription>
                  </CalculatorCell>
                </Column>
                <Column isSize={6} isPaddingless>
                  <CalculatorCell isColor="white" isDisplay="flex" isJustify="space-between">
                    <CalculatorFeatureCard>
                      <Icon icon={android} size={30} />
                      <CalculatorFeatureName>Android</CalculatorFeatureName>
                    </CalculatorFeatureCard>
                    <CalculatorFeatureCard>
                      <Icon icon={android} size={30} />
                      <CalculatorFeatureName>Android</CalculatorFeatureName>
                    </CalculatorFeatureCard>
                    <CalculatorFeatureCard>
                      <Icon icon={android} size={30} />
                      <CalculatorFeatureName>Android</CalculatorFeatureName>
                    </CalculatorFeatureCard>
                  </CalculatorCell>
                </Column>
                <Column isSize={3} isPaddingless>
                  <CalculatorCell
                    isColor="indigo"
                    isDisplay="flex"
                    isAlign="center"
                    isJustify="center">
                    <CalculatorFeatureCost cost="120" />
                  </CalculatorCell>
                </Column>
              </Columns>
              <Columns isMarginless isMultiline>
                <Column isSize={3} isPaddingless>
                  <CalculatorCell isColor="white" isDisplay="flex" isAlign="center">
                    <CalculatorFeatureDescription>
                      Select the platform to your project
                    </CalculatorFeatureDescription>
                  </CalculatorCell>
                </Column>
                <Column isSize={6} isPaddingless>
                  <CalculatorCell isColor="white" isDisplay="flex" isJustify="space-between">
                    <CalculatorFeatureCard>
                      <Icon icon={android} size={30} />
                      <CalculatorFeatureName>Android</CalculatorFeatureName>
                    </CalculatorFeatureCard>
                    <CalculatorFeatureCard>
                      <Icon icon={android} size={30} />
                      <CalculatorFeatureName>Android</CalculatorFeatureName>
                    </CalculatorFeatureCard>
                    <CalculatorFeatureCard>
                      <Icon icon={android} size={30} />
                      <CalculatorFeatureName>Android</CalculatorFeatureName>
                    </CalculatorFeatureCard>
                  </CalculatorCell>
                </Column>
                <Column isSize={3} isPaddingless>
                  <CalculatorCell
                    isColor="indigo"
                    isDisplay="flex"
                    isAlign="center"
                    isJustify="center">
                    <CalculatorFeatureCost cost="120" />
                  </CalculatorCell>
                </Column>
              </Columns>
            </CalculatorWrapper>
          </Container>
        </Section>
        <Section>
          <PricingContact />
        </Section>
      </Hero>
    </Layout>
  );
};

export default Pricing;
