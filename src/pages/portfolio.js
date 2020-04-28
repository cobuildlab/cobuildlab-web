import React from 'react';
import { Container, HeroHeader, HeroBody, Hero } from 'bloomer';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SeoMetaTags from '../components/SeoMetaTags';
import Layout from '../components/2020/Layout';
import BannerBackground from '../components/2020/BannerBackground';

import HeroTitle from '../components/portfolio/HeroTitle';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import ProjectTitle from '../components/portfolio/ProjectTitle';
import PorftolioCategory from '../components/portfolio/PortfolioCategory';

import AccountableGallery from '../components/portfolio/galleries/Accountable';
import CollabtogrowGallery from '../components/portfolio/galleries/Collabtogrow';
import ContentManagerGallery from '../components/portfolio/galleries/ContentManager';
import CtoFoundersGallery from '../components/portfolio/galleries/CtoFounders';
import BazlGallery from '../components/portfolio/galleries/Bazl';
import ElementalGallery from '../components/portfolio/galleries/Elemental';
import KademGallery from '../components/portfolio/galleries/Kadem';
import OkrooGallery from '../components/portfolio/galleries/Okroo';
import PayKlever from '../components/portfolio/galleries/PayKlever';
import RyvalGallery from '../components/portfolio/galleries/Ryval';
import StoryRocket from '../components/portfolio/galleries/StoryRocket';

const Wrapper = styled.div`
  position: relative;
  padding-top: 6em;
`;

const GalleryContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const Portfolio = ({ data }) => (
  <Layout>
    <SeoMetaTags
      title="Portfolio"
      description="Portfolio"
      image={data.seoImages.childImageSharp.resize}
      titleTemplate="Cobuild Lab"
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
          <PorftolioCategory />
          <GalleryContainer>
            <AccountableGallery search="accountable" />
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
      <PortfolioSection id="collabtogrow">
        <Container>
          <ProjectTitle>Collabtogrow</ProjectTitle>
          <PorftolioCategory type="web" />
          <GalleryContainer>
            <CollabtogrowGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="contentManager" color="white">
        <Container>
          <ProjectTitle>Content Manager</ProjectTitle>
          <PorftolioCategory type="web" />
          <GalleryContainer>
            <ContentManagerGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="ctoFounders">
        <Container>
          <ProjectTitle>CTO Founders</ProjectTitle>
          <PorftolioCategory type="app" />
          <GalleryContainer>
            <CtoFoundersGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="elemental" color="white">
        <Container>
          <ProjectTitle>Elemental</ProjectTitle>
          <PorftolioCategory type="app" />
          <GalleryContainer>
            <ElementalGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="kadem">
        <Container>
          <ProjectTitle>Kadem</ProjectTitle>
          <PorftolioCategory type="web/app" />
          <GalleryContainer>
            <KademGallery />
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
      <PortfolioSection id="payklever">
        <Container>
          <ProjectTitle>Payklever</ProjectTitle>
          <PorftolioCategory type="web" />
          <GalleryContainer>
            <PayKlever />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="ryval" color="white">
        <Container>
          <ProjectTitle>Ryval</ProjectTitle>
          <PorftolioCategory type="app" />
          <GalleryContainer>
            <RyvalGallery />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="storyRocket">
        <Container>
          <ProjectTitle>Story Rocket</ProjectTitle>
          <PorftolioCategory type="web" />
          <GalleryContainer>
            <StoryRocket search="storyRocket" />
          </GalleryContainer>
        </Container>
      </PortfolioSection>
    </Hero>
  </Layout>
);

Portfolio.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/jobcore.jpg" }) {
      childImageSharp {
        resize(width: 1200, height: 1200) {
          width
          height
          src
        }
      }
    }
  }
`;

export default Portfolio;
