import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SeoMetaTags from '../components/SeoMetaTags';
import Layout from '../components/2020/Layout';

import HeroTitle from '../components/portfolio/HeroTitle';
import Header from '../components/2020/Header';
import PortfolioMenu from '../components/portfolio/PortfolioMenu';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import ProjectTitle from '../components/portfolio/ProjectTitle';

import AccountableGallery from '../components/portfolio/galleries/Accountable';
import BazlGallery from '../components/portfolio/galleries/Bazl';
import Charter from '../components/portfolio/galleries/Charter';
import CollabtogrowGallery from '../components/portfolio/galleries/Collabtogrow';
import ContentManagerGallery from '../components/portfolio/galleries/ContentManager';
import CtoFoundersGallery from '../components/portfolio/galleries/CtoFounders';
import ElementalGallery from '../components/portfolio/galleries/Elemental';
import ElPitazo from '../components/portfolio/galleries/ElPitazo';
import Gurupia from '../components/portfolio/galleries/Gurupia';
import Jobcore from '../components/portfolio/galleries/Jobcore';
import KademGallery from '../components/portfolio/galleries/Kadem';
import LeadVolt from '../components/portfolio/galleries/LeadVolt';
import Mama from '../components/portfolio/galleries/Mama';
import Massone from '../components/portfolio/galleries/Massone';
import MiamiSoftwareDevelopers from '../components/portfolio/galleries/MiamiSoftwareDevelopers';
import OkrooGallery from '../components/portfolio/galleries/Okroo';
import PayKlever from '../components/portfolio/galleries/PayKlever';
import RyvalGallery from '../components/portfolio/galleries/Ryval';
import StoryRocket from '../components/portfolio/galleries/StoryRocket';
import Weedmatch from '../components/portfolio/galleries/Weedmatch';
import Zonia from '../components/portfolio/galleries/Zonia';

const Wrapper = styled.div`
  position: relative;
  padding-top: 6em;
  @media screen and (max-width: 768px) {
    padding-top: 1em;
  }
`;

const Portfolio = ({ data }) => (
  <Layout>
    <SeoMetaTags
      title="Portfolio"
      description="Portfolio"
      image={data.seoImages.childImageSharp.resize}
    />
    <Header />
    <Container>
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 2 }}>
          <PortfolioMenu />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 10 }}>
          <Wrapper>
            <HeroTitle />
          </Wrapper>
          <PortfolioSection id="accountable">
            <ProjectTitle type={['app']}>Accountable</ProjectTitle>
            <AccountableGallery search="accountable" />
          </PortfolioSection>
          <PortfolioSection id="bazl" color="white">
            <ProjectTitle type={['app', 'web']}>Bazl</ProjectTitle>
            <BazlGallery />
          </PortfolioSection>
          <PortfolioSection id="charter">
            <ProjectTitle type={['app']}>Charter</ProjectTitle>
            <Charter />
          </PortfolioSection>
          <PortfolioSection id="collabtogrow" color="white">
            <ProjectTitle type={['web']}>Collabtogrow</ProjectTitle>
            <CollabtogrowGallery />
          </PortfolioSection>
          <PortfolioSection id="contentManager">
            <ProjectTitle type={['web']}>Content Manager</ProjectTitle>
            <ContentManagerGallery />
          </PortfolioSection>
          <PortfolioSection id="ctoFounders" color="white">
            <ProjectTitle type={['app']}>CTO Founders</ProjectTitle>
            <CtoFoundersGallery />
          </PortfolioSection>
          <PortfolioSection id="elpitazo">
            <ProjectTitle type={['app']}>El Pitazo</ProjectTitle>
            <ElPitazo />
          </PortfolioSection>
          <PortfolioSection id="elemental" color="white">
            <ProjectTitle type={['app']}>Elemental</ProjectTitle>
            <ElementalGallery />
          </PortfolioSection>
          <PortfolioSection id="gurupia">
            <ProjectTitle type={['web']}>Gurupia</ProjectTitle>
            <Gurupia />
          </PortfolioSection>
          <PortfolioSection id="jobcore" color="white">
            <ProjectTitle type={['web', 'app']}>Jobcore</ProjectTitle>
            <Jobcore />
          </PortfolioSection>
          <PortfolioSection id="kadem">
            <ProjectTitle type={['web', 'app']}>Kadem</ProjectTitle>
            <KademGallery />
          </PortfolioSection>
          <PortfolioSection id="leadvolt" color="white">
            <ProjectTitle type={['web']}>LeadVolt</ProjectTitle>
            <LeadVolt />
          </PortfolioSection>
          <PortfolioSection id="mama">
            <ProjectTitle type={['app']}>Mama</ProjectTitle>
            <Mama />
          </PortfolioSection>
          <PortfolioSection id="massone" color="white">
            <ProjectTitle type={['web', 'app']}>Massone</ProjectTitle>
            <Massone />
          </PortfolioSection>
          <PortfolioSection id="miamisoftwaredevelopers">
            <ProjectTitle type={['web']}>Miami Software Developers</ProjectTitle>
            <MiamiSoftwareDevelopers />
          </PortfolioSection>
          <PortfolioSection id="okroo" color="white">
            <ProjectTitle type={['app']}>Okroo</ProjectTitle>
            <OkrooGallery />
          </PortfolioSection>
          <PortfolioSection id="payklever">
            <ProjectTitle type={['web']}>Payklever</ProjectTitle>
            <PayKlever />
          </PortfolioSection>
          <PortfolioSection id="ryval" color="white">
            <ProjectTitle type={['app']}>Ryval</ProjectTitle>
            <RyvalGallery />
          </PortfolioSection>
          <PortfolioSection id="storyRocket">
            <ProjectTitle type={['web']}>Storyrocket</ProjectTitle>
            <StoryRocket />
          </PortfolioSection>
          <PortfolioSection id="weedmatch" color="white">
            <ProjectTitle type={['app']}>Weedmatch</ProjectTitle>
            <Weedmatch />
          </PortfolioSection>
          <PortfolioSection id="zonia">
            <ProjectTitle type={['app']}>Zonia</ProjectTitle>
            <Zonia />
          </PortfolioSection>
        </Column>
      </Columns>
    </Container>
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
