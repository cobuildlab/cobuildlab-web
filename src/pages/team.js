import React from 'react';
import { Hero, HeroHeader, HeroBody, Section as BloomerSection, Container } from 'bloomer';
import styled from 'styled-components';
import SeoMetaTags from '../components/SeoMetaTags';
import Layout from '../components/2020/Layout';
import Header from '../components/2020/header/Header';
import TeamHero from '../components/team/TeamHero';
import TeamList from '../components/team/TeamList';

const Section = styled(BloomerSection)`
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;

const Pricing = () => (
  <Layout>
    <SeoMetaTags
      title="Price Calculator"
      description="Use your price calculator to get a variation of expenses"
    />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
      <HeroBody>
        <TeamHero />
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <TeamList />
      </Container>
    </Section>
  </Layout>
);

export default Pricing;
