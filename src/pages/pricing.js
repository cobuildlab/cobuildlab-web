import React from 'react';
import { Hero, HeroHeader, HeroBody, Container, Column, Columns, Section } from 'bloomer';
import SeoMetaTags from '../components/SeoMetaTags';
import Layout from '../components/2020/Layout';
import Header from '../components/2020/header/Header';
import PricingHero from '../components/pricing/PricingHero';
import CalculatorWrapper from '../components/calculator/CalculatorWrapper';
import CalculatorCell from '../components/calculator/CalculatorCell';
import CalculatorHeader from '../components/calculator/CalculatorHeader';
import CalculatorCellTitle from '../components/calculator/CalculatorCellTitle';
import CalculatorFeatureDescription from '../components/calculator/feature/CalculatorFeatureDescription';
import CalculatorFeatureCard from '../components/calculator/feature/CalculatorFeatureCard';

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
                    <CalculatorCellTitle>Platform</CalculatorCellTitle>
                  </CalculatorCell>
                </Column>
                <Column isSize={3} isPaddingless>
                  <CalculatorCell>
                    <CalculatorHeader />
                  </CalculatorCell>
                </Column>
              </Columns>
              <Columns isMarginless isMultiline>
                <Column isSize={9} isMultiline>
                  <Column isSize={12} isPaddingless isDisplay="flex">
                    <Column isSize={4} isPaddingless>
                      <CalculatorCell isColor="white">
                        <CalculatorFeatureDescription>
                          Select the platform to your project
                        </CalculatorFeatureDescription>
                      </CalculatorCell>
                    </Column>
                    <Column isSize={8} isPaddingless>
                      <CalculatorCell isColor="white" isDisplay="flex" isJustify="space-between">
                        <CalculatorFeatureCard>
                          <p>hola</p>
                        </CalculatorFeatureCard>
                        <CalculatorFeatureCard>
                          <p>hola</p>
                        </CalculatorFeatureCard>
                        <CalculatorFeatureCard>
                          <p>hola</p>
                        </CalculatorFeatureCard>
                      </CalculatorCell>
                    </Column>
                  </Column>
                  <Column isSize={12} isPaddingless isDisplay="flex">
                    <Column isSize={4} isPaddingless>
                      <CalculatorCell isColor="white">
                        <CalculatorFeatureDescription>
                          Select the platform to your project
                        </CalculatorFeatureDescription>
                      </CalculatorCell>
                    </Column>
                    <Column isSize={8} isPaddingless>
                      <CalculatorCell isColor="white" isDisplay="flex" isJustify="space-between">
                        <CalculatorFeatureCard>
                          <p>hola</p>
                        </CalculatorFeatureCard>
                        <CalculatorFeatureCard>
                          <p>hola</p>
                        </CalculatorFeatureCard>
                        <CalculatorFeatureCard>
                          <p>hola</p>
                        </CalculatorFeatureCard>
                      </CalculatorCell>
                    </Column>
                  </Column>
                </Column>
                <Column isSize={3} isPaddingless>
                  <CalculatorCell isColor="indigo">
                    <h1>hola</h1>
                  </CalculatorCell>
                </Column>
              </Columns>
            </CalculatorWrapper>
          </Container>
        </Section>
      </Hero>
    </Layout>
  );
};

export default Pricing;
