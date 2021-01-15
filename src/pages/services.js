import React from 'react';
import { Container, Hero, HeroHeader, Section, Columns } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';
import SeoMetaTags from '../components/SeoMetaTags';

import ServicesHeader from '../components/services/ServicesHeader';
import ServicesCard from '../components/services/card/ServicesCard';

import Contact from '../components/2020/HomePageContact';
import ServicesBannerBackgroundTop from '../components/services/ServicesBannerBackgroundTop';
import ServicesBannerBackgroundBottom from '../components/services/ServicesBannerBackgroundBottom';
import H4 from '../components/Typography/H4';

import styled from 'styled-components';

const StyledTitle = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

const Services = () => (
  <Layout>
    <SeoMetaTags title="Services" description="Privacy Policy for the Cobuild Lab" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
    </Hero>
    <Section>
      <ServicesBannerBackgroundTop />
      <ServicesBannerBackgroundBottom />
      <Container>
        <ServicesHeader />
      </Container>
    </Section>
    <Section>
      <StyledTitle>
        <H4>Main Services</H4>
      </StyledTitle>
      <Columns isCentered>
        <ServicesCard
          title={'Web'}
          subtitle={'Development'}
          cover={'We work behind the curtain to make your website gorgeous and engaging'}
          to={'web-development'}
        />
        <ServicesCard
          title={'APP'}
          subtitle={'Development'}
          cover={'We develop native apps for iOS and Android'}
          to={'app-development'}
        />
      </Columns>
      <Columns isCentered>
        <ServicesCard
          title={'Cross-Platform'}
          subtitle={'Development'}
          cover={'Let us take your app to multiple platforms and devices'}
          to={'cross-platform-development'}
        />
        <ServicesCard
          title={'Web'}
          subtitle={'Design'}
          cover={'We create appealing and beautiful content for your web'}
          to={'web-design'}
        />
      </Columns>
    </Section>
    <Section>
      <StyledTitle>
        <H4>If you’re a Startup</H4>
      </StyledTitle>
      <Columns isCentered>
        <ServicesCard
          title={'MVP Software'}
          subtitle={'Development'}
          cover={' Validate and launch your product in a speedy and efficacious way'}
          to={'mvp-software-development'}
        />
        <ServicesCard
          title={'Product'}
          subtitle={'Development'}
          cover={'Let us turn your idea into a viable product'}
          to={'product-development'}
        />
      </Columns>
      <Columns isCentered />
    </Section>
    <Section>
      <StyledTitle>
        <H4>If you’re a Small Business Owner</H4>
      </StyledTitle>
      <Columns isCentered>
        <ServicesCard
          title={'Custom Software'}
          subtitle={'Development'}
          cover={'Tailor-made software to take care of your business needs'}
          to={'custom-software-development'}
        />
        <ServicesCard
          title={'Custom Customer'}
          subtitle={'Management System'}
          cover={''}
          to={'custom-customer-management-system'}
        />
      </Columns>
      <Columns isCentered>
        <ServicesCard
          title={'Field Service'}
          subtitle={'Management System'}
          cover={''}
          to={'field-service-management-system'}
        />
        <ServicesCard
          title={'Custom Learning'}
          subtitle={'Management System'}
          cover={''}
          to={'custom-learning-management-system'}
        />
      </Columns>
    </Section>
    <Section>
      <StyledTitle>
        <H4>For Logistics and Supply Chain Enterprises</H4>
      </StyledTitle>
      <Columns isCentered>
        <ServicesCard
          title={'Enterprise Software'}
          subtitle={'Development'}
          cover={
            'Zero-waste process combined with more than 50 years of experience.\n' +
            'Risk-costs reduction, more effective tracking, and faster delivery date.\n' +
            'Efficiency rate will increase with the right guidance and assistance.\n'
          }
          to={'enterprise-software-development'}
        />
        <ServicesCard
          title={'Process'}
          subtitle={'Automation'}
          cover={'Revolutionize your process and save time and money'}
          to={'process-automation'}
        />
      </Columns>
      <Columns isCentered>
        <ServicesCard
          title={'Digital'}
          subtitle={'Transformation'}
          cover={
            'Intelligence processes based on enterprises goals\n' +
            'Intelligent guidance / assistance / direction for digital transformation opportunities\n' +
            'Smart guidance / assistance / direction for digital transformation opportunities\n' +
            'Smart digital transformation opportunities guidance\n'
          }
          to={'digital-transformation'}
        />
      </Columns>
    </Section>
    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
);

export default Services;
