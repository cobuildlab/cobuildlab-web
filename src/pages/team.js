import React from 'react';
import { Hero, HeroHeader, HeroBody, Section as BloomerSection, Container } from 'bloomer';
import styled from 'styled-components';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';
import TeamHero from '../components/team/TeamHero';
import TeamList from '../components/team/new/TeamList';
import Contact from '../components/2020/HomePageContact';

const Section = styled(BloomerSection)`
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding: 0em 1em 1em 1em;
  }
`;

const Team = () => (
  <Layout>
    <SeoMetaTags title="Cobuild Lab Team" description="Team work" />
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
    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
);

export default Team;
