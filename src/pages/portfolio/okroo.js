import React from 'react';
import Helmet from 'react-helmet';
import { Container, HeroHeader, HeroBody, Hero } from 'bloomer';
import styled from 'styled-components';

import Layout from '../../components/2020/Layout';
import BannerBackground from '../../components/2020/BannerBackground';

import HeroTitle from '../../components/portfolio/HeroTitle';
import PortfolioHeader from '../../components/portfolio/PortfolioHeader';
import PortfolioSection from '../../components/portfolio/PortfolioSection';
import ProjectTitle from '../../components/portfolio/ProjectTitle';

import OkrooGallery from '../../components/portfolio/OkrooGallery';
import AccountableGallery from '../../components/portfolio/AccountableGallery';

const siteTitle = 'Portfolio | Cobuild Lab';

const Wrapper = styled.div`
  position: relative;
  padding-top: 6em;
`;

const GalleryContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const Portfolio = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: 'Okroo Portfolio' }]}
      title={siteTitle}
    />
    <Hero>
      <HeroHeader>
        <PortfolioHeader />
      </HeroHeader>
      <HeroBody isPaddingless>
        <Wrapper>
          <BannerBackground />
          <Container>
            <HeroTitle />
          </Container>
        </Wrapper>
      </HeroBody>
      <PortfolioSection id="okroo-test-1">
        <Container>
          <ProjectTitle>Okroo</ProjectTitle>
          <GalleryContainer>
            <OkrooGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="okroo-test-2" color="white">
        <Container>
          <ProjectTitle>Accountable</ProjectTitle>
          <GalleryContainer>
            <AccountableGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
    </Hero>
  </Layout>
);

export default Portfolio;
