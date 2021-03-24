import React from 'react';
import { Container, Hero, HeroHeader, Section, Columns } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';

import ServicesHeader from '../components/services/details/ServicesHeader';

import Contact from '../components/2020/HomePageContact';
import ServicesBannerBackgroundBottom from '../components/services/ServicesBannerBackgroundBottom';
import styled from 'styled-components';

import ServicesSection3 from '../components/services/details/ServicesSection3';
import ServicesSection4 from '../components/services/details/ServicesSection4';
import ServicesCardProduct from '../components/services/details/card/ServicesCardProduct';
import ServicesCardSoftware from '../components/services/details/card/ServicesCardSoftware';
import ServicesCardTraining from '../components/services/details/card/ServicesCardTraining';
import Title2 from '../components/Title2';
import ServicesSection2 from '../components/services/details/ServicesSection2';

import MyVoice from '../components/services/details/customer-success-stories/card/MyVoice';
import JobCore from '../components/services/details/customer-success-stories/card/JobCore';
import Propagad from '../components/services/details/customer-success-stories/card/Propagad';

const StyledSubTitle = styled.div`
  text-align: center;
`;

const StyledSection2 = styled(Section)`
  background: #fff;
`;

const StyledContainer = styled(Container)`
  padding-top: 4px;
  padding-bottom: 75px;
`;

const ServicesDetail = () => (
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
        <ServicesHeader />
      </Container>
    </Section>
    <StyledSection2>
      <ServicesSection2 />
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3 />
      </Container>
    </Section>
    <Section>
      <Container>
        <Columns isCentered>
          <ServicesCardProduct />
          <ServicesCardSoftware />
          <ServicesCardTraining />
        </Columns>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4 />
      </Container>
    </Section>
    <StyledSection2>
      <StyledContainer>
        <StyledSubTitle>
          <Title2>Customer Success Stories</Title2>
        </StyledSubTitle>
        <Columns isCentered>
          <MyVoice />
          <JobCore />
          <Propagad />
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

export default ServicesDetail;
