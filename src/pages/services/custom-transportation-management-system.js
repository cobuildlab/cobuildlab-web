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

import Title2 from '../../components/Title2';
import ServicesSection2 from '../../components/services/details/ServicesSection2';
import { StaticImage } from 'gatsby-plugin-image';

import Avsee from '../../components/services/details/customer-success-stories/card/Avsee';
import Pitazo from '../../components/services/details/customer-success-stories/card/Pitazo';
import Weedmatch from '../../components/services/details/customer-success-stories/card/Weedmatch';
import ServicesSection4 from '../../components/services/details/ServicesSection4';

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

const WebDevelopment = () => (
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
          title={'Custom Transportation Management System'}
          paragraph={
            'A Customized Transportation Management system is software that solves and optimizes the challenges of transportation processes. It provides 24/7 tracking of the movement of goods and their transport to guarantee optimal delivery times.'
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/icon-custom-transportation-management-system-02.svg'
              }
              alt="Custom Transportation Management System"
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Optimize your '}
          titleOrange={'Shipping Process'}
          text={
            'We will support your transportation process by developing a custom software system that automates the process and receives valuable information and data that can help you improve for each shipment in the future.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Would you like to optimize spending and evolve in your process?'}
          otherText={
            'With a custom transportation management system, all transportation challenges can be easy to handle.'
          }
          otherText2={
            'If you own or work for a freight organization, this is the right software system for you. With this system, you will never waste time contacting carriers or operators, requesting quotes, collecting data, etc.'
          }>
          <StaticImage
            src={
              './../../assets/images/service/ilustracion-custom-transportation-management-system-01.svg'
            }
            alt={'Illustration custom transportation management system'}
          />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'You need an Enterprise Resource Planning System'}
          text={
            "To successfully coordinate the planning and performance of your company's activities. We offer you our zero waste methodology and a tech stack according to the current market requirements."
          }
          leftText={[
            'Managing Your Business with 1 System: Financials, Human resources, Manufacturing management, Inventory management, Purchasing management, Quality management, Sales management.',
            'A newer ERP Systems Are Upgrade-Friendly. It is designed to offer flexibility, adaptability, and scalability for growth more.',
            'Increase your organization’s productivity while reducing time and labor costs.',
          ]}
          rightTextList={[
            'Helps you meet the demands of your business partners and external stakeholders, and that it can keep your employees happy and productive.',
            'Help You Better Analyze Your Business’ Data.',
            'Meeting Customer Expectations, what Customers Expect from Businesses.',
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
          <Avsee />
          <Pitazo />
          <Weedmatch />
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

export default WebDevelopment;
