import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SeoMetaTags from '../components/SeoMetaTags';
import { Layout, Sider, Content } from '../components/portfolio/PortfolioLayout';
import Footer from '../components/enterprise/containers/footer/Footer';

import HeroTitle from '../components/portfolio/HeroTitle';
import PortfolioMenu from '../components/portfolio/PortfolioMenu';
import ProjectContainer from '../components/portfolio/ProjectContainer';
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

const Portfolio = ({ data }) => (
  <Layout>
    <SeoMetaTags
      title="Portfolio"
      description="Portfolio"
      image={data.seoImages.childImageSharp.resize}
    />
    <Sider>
      <PortfolioMenu />
    </Sider>
    <Content>
      <HeroTitle />
      <ProjectContainer id="accountable">
        <ProjectTitle type={['app']}>Accountable</ProjectTitle>
        <AccountableGallery search="accountable" />
      </ProjectContainer>
      <ProjectContainer id="bazl" color="white">
        <ProjectTitle type={['app', 'web']}>Bazl</ProjectTitle>
        <BazlGallery />
      </ProjectContainer>
      <ProjectContainer id="charter">
        <ProjectTitle type={['app']}>Charter</ProjectTitle>
        <Charter />
      </ProjectContainer>
      <ProjectContainer id="collabtogrow" color="white">
        <ProjectTitle type={['web']}>Collabtogrow</ProjectTitle>
        <CollabtogrowGallery />
      </ProjectContainer>
      <ProjectContainer id="contentManager">
        <ProjectTitle type={['web']}>Content Manager</ProjectTitle>
        <ContentManagerGallery />
      </ProjectContainer>
      <ProjectContainer id="ctoFounders" color="white">
        <ProjectTitle type={['app']}>CTO Founders</ProjectTitle>
        <CtoFoundersGallery />
      </ProjectContainer>
      <ProjectContainer id="elpitazo">
        <ProjectTitle type={['app']}>El Pitazo</ProjectTitle>
        <ElPitazo />
      </ProjectContainer>
      <ProjectContainer id="elemental" color="white">
        <ProjectTitle type={['app']}>Elemental</ProjectTitle>
        <ElementalGallery />
      </ProjectContainer>
      <ProjectContainer id="gurupia">
        <ProjectTitle type={['web']}>Gurupia</ProjectTitle>
        <Gurupia />
      </ProjectContainer>
      <ProjectContainer id="jobcore" color="white">
        <ProjectTitle type={['web', 'app']}>Jobcore</ProjectTitle>
        <Jobcore />
      </ProjectContainer>
      <ProjectContainer id="kadem">
        <ProjectTitle type={['web', 'app']}>Kadem</ProjectTitle>
        <KademGallery />
      </ProjectContainer>
      <ProjectContainer id="leadvolt" color="white">
        <ProjectTitle type={['web']}>LeadVolt</ProjectTitle>
        <LeadVolt />
      </ProjectContainer>
      <ProjectContainer id="mama">
        <ProjectTitle type={['app']}>Mama</ProjectTitle>
        <Mama />
      </ProjectContainer>
      <ProjectContainer id="massone" color="white">
        <ProjectTitle type={['web', 'app']}>Massone</ProjectTitle>
        <Massone />
      </ProjectContainer>
      <ProjectContainer id="miamisoftwaredevelopers">
        <ProjectTitle type={['web']}>Miami Software Developers</ProjectTitle>
        <MiamiSoftwareDevelopers />
      </ProjectContainer>
      <ProjectContainer id="okroo" color="white">
        <ProjectTitle type={['app']}>Okroo</ProjectTitle>
        <OkrooGallery />
      </ProjectContainer>
      <ProjectContainer id="payklever">
        <ProjectTitle type={['web']}>Payklever</ProjectTitle>
        <PayKlever />
      </ProjectContainer>
      <ProjectContainer id="ryval" color="white">
        <ProjectTitle type={['app']}>Ryval</ProjectTitle>
        <RyvalGallery />
      </ProjectContainer>
      <ProjectContainer id="storyRocket">
        <ProjectTitle type={['web']}>Storyrocket</ProjectTitle>
        <StoryRocket />
      </ProjectContainer>
      <ProjectContainer id="weedmatch" color="white">
        <ProjectTitle type={['app']}>Weedmatch</ProjectTitle>
        <Weedmatch />
      </ProjectContainer>
      <ProjectContainer id="zonia">
        <ProjectTitle type={['app']}>Zonia</ProjectTitle>
        <Zonia />
      </ProjectContainer>
      <Footer />
    </Content>
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
