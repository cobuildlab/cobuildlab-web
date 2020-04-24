import React from 'react';
import Helmet from 'react-helmet';
import { Container, HeroHeader, HeroBody, Hero } from 'bloomer';
import styled from 'styled-components';

import Layout from '../components/2020/Layout';
import BannerBackground from '../components/2020/BannerBackground';

import HeroTitle from '../components/portfolio/HeroTitle';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import ProjectTitle from '../components/portfolio/ProjectTitle';
import PorftolioCategory from '../components/portfolio/PortfolioCategory';

import AccountableGallery from '../components/portfolio/galleries/Accountable';
import BazlGallery from '../components/portfolio/galleries/Bazl';
import ElementalGallery from '../components/portfolio/galleries/Elemental';
import OkrooGallery from '../components/portfolio/galleries/Okroo';
import RyvalGallery from '../components/portfolio/galleries/Ryval';

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
      <PortfolioSection id="accountable">
        <Container>
          <ProjectTitle>Accountable</ProjectTitle>
          <PorftolioCategory type="web" />
          <GalleryContainer>
            <AccountableGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="bazl" color="white">
        <Container>
          <ProjectTitle>Bazl</ProjectTitle>
          <PorftolioCategory type="web/app" />
          <GalleryContainer>
            <BazlGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="elemental">
        <Container>
          <ProjectTitle>Elemental</ProjectTitle>
          <PorftolioCategory type="app" />
          <GalleryContainer>
            <ElementalGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="okroo" color="white">
        <Container>
          <ProjectTitle>Okroo</ProjectTitle>
          <PorftolioCategory type="app" />
          <GalleryContainer>
            <OkrooGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="ryval">
        <Container>
          <ProjectTitle>Ryval</ProjectTitle>
          <PorftolioCategory type="app" />
          <GalleryContainer>
            <RyvalGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
    </Hero>
  </Layout>
);

export default Portfolio;
