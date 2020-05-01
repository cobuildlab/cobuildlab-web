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
import ProjectType from '../components/portfolio/ProjectType';

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
            <ProjectTitle>Accountable</ProjectTitle>
            <ProjectType type={["app"]} />
            <AccountableGallery search="accountable" />
          </PortfolioSection>
          <PortfolioSection id="bazl" color="white">
            <ProjectTitle>Bazl</ProjectTitle>
            <ProjectType type={["app", "web"]} />
            <BazlGallery />
          </PortfolioSection>
          <PortfolioSection id="charter">
            <ProjectTitle>Charter</ProjectTitle>
            <ProjectType type={["app"]} />
            <Charter />
          </PortfolioSection>
          <PortfolioSection id="collabtogrow" color="white">
            <ProjectTitle>Collabtogrow</ProjectTitle>
            <ProjectType type={["web"]} />
            <CollabtogrowGallery />
          </PortfolioSection>
          <PortfolioSection id="contentManager">
            <ProjectTitle>Content Manager</ProjectTitle>
            <ProjectType type={["web"]} />
            <ContentManagerGallery />
          </PortfolioSection>
          <PortfolioSection id="ctoFounders" color="white">
            <ProjectTitle>CTO Founders</ProjectTitle>
            <ProjectType type={["app"]} />
            <CtoFoundersGallery />
          </PortfolioSection>
          <PortfolioSection id="elpitazo">
            <ProjectTitle>El Pitazo</ProjectTitle>
            <ProjectType type={["app"]} />
            <ElPitazo />
          </PortfolioSection>
          <PortfolioSection id="elemental" color="white">
            <ProjectTitle>Elemental</ProjectTitle>
            <ProjectType type={["app"]} />
            <ElementalGallery />
          </PortfolioSection>
          <PortfolioSection id="gurupia">
            <ProjectTitle>Gurupia</ProjectTitle>
            <ProjectType type={["web"]} />
            <Gurupia />
          </PortfolioSection>
          <PortfolioSection id="jobcore" color="white">
            <ProjectTitle>Jobcore</ProjectTitle>
            <ProjectType type={["web","app"]} />
            <Jobcore />
          </PortfolioSection>
          <PortfolioSection id="kadem">
            <ProjectTitle>Kadem</ProjectTitle>
            <ProjectType type={["web","app"]} />
            <KademGallery />
          </PortfolioSection>
          <PortfolioSection id="leadvolt" color="white">
            <ProjectTitle>LeadVolt</ProjectTitle>
            <ProjectType type={["web"]} />
            <LeadVolt />
          </PortfolioSection>
          <PortfolioSection id="mama">
            <ProjectTitle>Mama</ProjectTitle>
            <ProjectType type={["app"]} />
            <Mama />
          </PortfolioSection>
          <PortfolioSection id="massone" color="white">
            <ProjectTitle>Massone</ProjectTitle>
            <ProjectType type={["web","app"]} />
            <Massone />
          </PortfolioSection>
          <PortfolioSection id="miamisoftwaredevelopers">
            <ProjectTitle>Miami Software Developers</ProjectTitle>
            <ProjectType type={["web"]} />
            <MiamiSoftwareDevelopers />
          </PortfolioSection>
          <PortfolioSection id="okroo" color="white">
            <ProjectTitle>Okroo</ProjectTitle>
            <ProjectType type={["app"]} />
            <OkrooGallery />
          </PortfolioSection>
          <PortfolioSection id="payklever">
            <ProjectTitle>Payklever</ProjectTitle>
            <ProjectType type={["web"]} />
            <PayKlever />
          </PortfolioSection>
          <PortfolioSection id="ryval" color="white">
            <ProjectTitle>Ryval</ProjectTitle>
            <ProjectType type={["app"]} />
            <RyvalGallery />
          </PortfolioSection>
          <PortfolioSection id="storyRocket">
            <ProjectTitle>Storyrocket</ProjectTitle>
            <ProjectType type={["web"]} />
            <StoryRocket />
          </PortfolioSection>
          <PortfolioSection id="weedmatch" color="white">
            <ProjectTitle>Weedmatch</ProjectTitle>
            <ProjectType type={["app" ]}/>
            <Weedmatch />
          </PortfolioSection>
          <PortfolioSection id="zonia">
            <ProjectTitle>Zonia</ProjectTitle>
            <ProjectType type={["app"]} />
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
