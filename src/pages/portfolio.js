import React from 'react';
import Helmet from 'react-helmet';
import { HeroHeader, HeroBody, Hero, Section, Container } from 'bloomer';
import styled from 'styled-components';

import Layout from '../components/2020/Layout';
import Header from '../components/2020/Header';
import BannerBackground from '../components/2020/BannerBackground';

import HeroTitle from '../components/portfolio/HeroTitle';
import PortfolioContent from '../components/portfolio/PortfolioContent';

const siteTitle = 'Portfolio | Cobuild Lab';

const Wrapper = styled.div`
  position: relative;
`;

const Portfolio = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: 'Our Portfolio' }]}
      title={siteTitle}
    />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
      <HeroBody>
        <Wrapper>
          <BannerBackground />
          <Container>
            <HeroTitle />
          </Container>
        </Wrapper>
      </HeroBody>
      <Section isPaddingless>
        <Container>
          <PortfolioContent />
        </Container>
      </Section>
    </Hero>
  </Layout>
);


export default Portfolio;