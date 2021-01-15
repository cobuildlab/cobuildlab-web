import React from 'react';
import { Container, Hero, HeroHeader, Section, Columns } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../../components/2020/Layout';
import Header from '../../components/header/Header';
import SeoMetaTags from '../../components/SeoMetaTags';

import ServicesHeader from '../../components/services/details/ServicesHeader';

import Contact from '../../components/2020/HomePageContact';
import ServicesBannerBackgroundBottom from '../../components/services/ServicesBannerBackgroundBottom';
import styled from 'styled-components';

import ServicesHeader2 from '../../components/services/details/ServicesHeader2';
import ServicesHeader3 from '../../components/services/details/ServicesHeader3';
import ServicesCardProduct from '../../components/services/details/card/ServicesCardProduct';
import ServicesCardSoftware from '../../components/services/details/card/ServicesCardSoftware';
import ServicesCardTraining from '../../components/services/details/card/ServicesCardTraining';
import SuccessStories from '../../components/services/details/SuccesStories';
import Title2 from '../../components/Title2';
import ServicesSection2 from '../../components/services/details/ServicesSection2';

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
          title={'App Development'}
          paragraph={
            'In this day and age, a mobile app is a must-have for a lot of businesses. They can increase the revenue streams and brand awareness for newly-launched enterprises. We can turn your idea and transform it into a powerful app fulfilling your time demands and investment requirements.'
          }
          paragraph2={''}
        />
      </Container>
    </Section>
    <StyledSection2>
      <ServicesSection2 />
    </StyledSection2>
    <Section>
      <Container>
        <ServicesHeader2 />
      </Container>
    </Section>
    <Section>
      <Columns isCentered>
        <ServicesCardProduct />
        <ServicesCardSoftware />
        <ServicesCardTraining />
      </Columns>
    </Section>
    <Section>
      <Container>
        <ServicesHeader3 />
      </Container>
    </Section>
    <StyledSection2>
      <StyledContainer>
        <StyledSubTitle>
          <Title2>Customer Success Stories</Title2>
        </StyledSubTitle>
        <SuccessStories />
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
