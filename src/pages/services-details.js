import React from 'react';
import { Container, Hero, HeroHeader, Section, Columns, Column } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';
import SeoMetaTags from '../components/SeoMetaTags';

import ServicesHeader from '../components/services/details/ServicesHeader';

import Contact from '../components/2020/HomePageContact';
import ServicesBannerBackgroundBottom from '../components/services/ServicesBannerBackgroundBottom';
import styled from 'styled-components';
import { TextOrange } from '../components/Typography/TextHelpers';
import ServicesSubTitle from '../components/services/ServicesSubTitle';

import ServicesHeader2 from '../components/services/details/ServicesHeader2';
import ServicesHeader3 from '../components/services/details/ServicesHeader3';
import ServicesCardProduct from '../components/services/details/card/ServicesCardProduct';
import ServicesCardSoftware from '../components/services/details/card/ServicesCardSoftware';
import ServicesCardTraining from '../components/services/details/card/ServicesCardTraining';
import SuccessStories from '../components/services/details/SuccesStories';

const StyledSubTitle = styled.div`
  text-align: center;
`;

const StyledSection = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Paragraph = styled.p`
  text-align: justify;
  padding-right: 50px;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  font-family: 'Lato-regular' !important;
  padding-left: 50px;
  color: #264a60;
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
    <Section style={{ padding: 0, backgroundColor: '#fff' }}>
      <Column isSize={{ mobile: 12, desktop: 12 }}>
        <StyledSection>
          <StyledSubTitle>
            <ServicesSubTitle>
              StartUp &nbsp;
              <TextOrange>your Idea</TextOrange>{' '}
            </ServicesSubTitle>
          </StyledSubTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, sapien at
            molestie suscipit, sapien leo faucibus ante, quis iaculis mauris nisl nec libero.
            Suspendisse imperdiet in ex ac varius. Donec elementum libero eu purus euismod, sit amet
            congue leo bibendum. Donec lacus ipsum, sodales a dignissim quis, placerat eget ex.
          </Paragraph>
        </StyledSection>
      </Column>
    </Section>
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
    <Section>
      <Container>
        <SuccessStories />
      </Container>
    </Section>
    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
);

export default ServicesDetail;
