import React from 'react';
import { Columns, Container, Hero, HeroHeader, Section } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../../components/2020/Layout';
import Header from '../../components/header/Header';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';

import ServicesHeader from '../../components/services/details/ServicesHeader';

import Contact from '../../components/2020/HomePageContact';
import ServicesBannerBackgroundBottom from '../../components/services/ServicesBannerBackgroundBottom';
import styled from 'styled-components';

import ServicesSection3 from '../../components/services/details/ServicesSection3';
import ServicesSection4 from '../../components/services/details/ServicesSection4';

import Title2 from '../../components/Title2';
import ServicesSection2 from '../../components/services/details/ServicesSection2';
import { StaticImage } from 'gatsby-plugin-image';

import Pitazo from '../../components/services/details/customer-success-stories/card/Pitazo';
import MyVoice from '../../components/services/details/customer-success-stories/card/MyVoice';
import Mama from '../../components/services/details/customer-success-stories/card/Mama';

const StyledSubTitle = styled.div`
  text-align: center;
`;

const StyledSection2 = styled(Section)`
  background: #fff;
  box-shadow: 0px 10px 20px #0000001a;
`;

const StyledContainer = styled(Container)`
  padding-top: 4px;
  padding-bottom: 75px;
`;

const AppDevelopment = () => (
  <Layout>
    <SeoMetaTags title="Services" description="Privacy Policy for the Cobuild Lab" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
    </Hero>
    <Section>
      <ServicesBannerBackgroundBottom />
      <Container>
        <ServicesHeader
          title={'Technical Analysis For Software Startup Investors'}
          paragraph={
            'This service includes the product roadmap, risk, and feasibility analysis, and soft security audit.'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-Technical-Analysis.svg'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Get a Technical Analysis '}
          titleOrange={'for Software Startups Investors'}
          text={
            'And forget about: high risks in the business model, supporting not viable ideas, confidentiality and cybersecurity issues with the app, uncertainty about the development process, and lack of knowledge about the product or industry.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'How I benefit from a Technical Analysis for Software Startups Investors?\n'}
          textList={[
            'Comprehensive knowledge about risks, legal aspects, burning rate. Access to the timeline.',
            'Estimates, essential data, business goals, development strategies.',
          ]}
          textList2={[
            'Check on the status of certificates, backups, encryptions.',
            'Ensure cybersecurity at a medium level.',
          ]}>
          <StaticImage src={'./../../assets/images/service/services-details3.png'} />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Why us?'}
          leftText={[
            "We've strong engineering background in solving business problems with software solutions combined with our experience developing software products.",
          ]}
          rightTextList={[
            'A work methodology focused on optimizing your investment and obtaining the best results.',
            'We have a zero-waste process',
          ]}
        />
      </Container>
    </Section>
    <StyledSection2>
      <StyledContainer>
        <StyledSubTitle>
          <Title2>Customer Success Stories</Title2>
        </StyledSubTitle>
        <Columns isCentered>
          <Pitazo />
          <MyVoice />
          <Mama />
        </Columns>
      </StyledContainer>
    </StyledSection2>
    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
);

export default AppDevelopment;
