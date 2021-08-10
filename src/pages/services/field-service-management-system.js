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

import Avsee from '../../components/services/details/customer-success-stories/card/Avsee';
import MyVoice from '../../components/services/details/customer-success-stories/card/MyVoice';
import Pitazo from '../../components/services/details/customer-success-stories/card/Pitazo';

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

const FieldServicesManagementSystem = () => (
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
          title={'Field Services Management System'}
          paragraph={
            'Track and manage field operations more accurately with a field service management system customized for your activities. In this new era, real-time tracking and communications are the keys to maximize earnings and customer satisfaction.'
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/iconos-Small-Business-Field-Service-Management-System.svg'
              }
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Customize your Field '}
          titleOrange={'Services Management System'}
          text={
            'A custom-developed field service management system is synonymous with endless improvement opportunities for your field service activities, giving you a significant advantage in the market.'
          }
          otherText={
            'Avoid unnecessary or missing features, challenges storing data, security failures, complexity to track all field activities, lack of reports or statistics to make strategic decisions, communication issues, and challenges planning.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Improve your field operations to the next step.'}
          textList={[
            'Logistics & Supply Chain Process automation.',
            'Simplified fields activities and operations.',
            'Records and data BACKUP.',
          ]}
          textList2={[
            'Improve your operations.',
            'Access to data and activities.',
            'team coordination.',
            'Full scalability.',
          ]}>
          <StaticImage src={'./../../assets/images/service/services-details3.png'} />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'A field service management system allows you to:'}
          leftText={[
            'Automate part of your logistics and supply chain processes.',
            'Simplify activities and operations in the field.',
            'Have a backup with the records and data in a safe place.',
          ]}
          rightTextList={[
            'Improve your operations.',
            'Facilitate access to data and activities (planned, in execution, and completed).',
            'Improve the coordination of your team.',
            'Full scalability.',
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
          <MyVoice />
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

export default FieldServicesManagementSystem;
