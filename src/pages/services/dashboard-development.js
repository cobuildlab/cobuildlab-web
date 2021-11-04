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

import Okroo from '../../components/services/details/customer-success-stories/card/Okroo';
import Mama from '../../components/services/details/customer-success-stories/card/Mama';
import Payklever from '../../components/services/details/customer-success-stories/card/Payklever';

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
          title={'Dashboard Development'}
          paragraph={
            'Dashboard software is an easy-to-use solution designed specifically for your business. It allows you to connect data from different systems, applications, and departments to identify trends, find correlations, and make better business decisions.'
          }
          img={
            <StaticImage
              src={'../../assets/images/service/card/icon-dashboard-development.svg'}
              alt={'Dashboard Development'}
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'What is'}
          titleOrange={'Dashboard Software?'}
          text={
            'Dashboard software is an information management tool that tracks, gathers, displays business data in interactive and customizable visualizations that enable you to monitor your business, analyze processes, and provide them with actionable insights.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Benefits You Get with your Dashboard Software'}
          otherText2={
            'We explain to you the dashboard benefits to your business that implements these modern solutions into its workflow:'
          }
          textList={[
            {
              subTitle: 'Gain a consistent view of KPIs: ',
              text: 'All your key performance indicators (KPIs) become visible from a centralized location, formed on a single screen, no matter the data source(s) you need to utilize.',
            },
            {
              subTitle: 'Empower everyone to explore data: ',
              text: 'Modern solutions cut the middleman and provide you with a drag-and-drop interface that enables you to explore the data yourself.',
            },
            {
              subTitle: 'Real-time updates: ',
              text: 'A real-time dashboard allows you to monitor activity as it happens throughout your business processes. ',
            },
            {
              subTitle: 'Access everywhere: ',
              text: 'Dashboard software is a scalable SaaS solution that offers access from everywhere and at any time. The only requirement is an Internet connection, and the software is immediately available.',
            },
          ]}
          textList2={[
            {
              subTitle: 'Data-driven Culture: ',
              text: 'By establishing data-driven workflows, you will minimize risks and improve your decision-making processes and overall business efficiency.',
            },
            {
              subTitle: 'Reap the benefits of Smart features: ',
              text: 'The dashboarding software augments the traditional means of monitoring, analyzing, and generating actionable insights using Artificial Intelligence, and takes you to the next level of data management.',
            },
            {
              subTitle: 'Begin to trust your data: ',
              text: 'By utilizing modern business dashboard software, you can completely trust your data since the software becomes the single point of truth, no matter the amount of data sources.',
            },
          ]}>
          <StaticImage
            src={'../../assets/images/service/dashboard-development-section.svg'}
            alt={'Dashboard Develpment Section'}
          />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Why Choose Us?'}
          text={
            'In Cobuild Lab, we offer all the dashboard development services you need, from planning and design to maintenance, providing an intuitive, automated, smart, and affordable solution that meets your business needs. We have an efficient team of experienced developers who strive to provide you with the best dashboard development services. We have all your control panel requirements and needs covered.'
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <StyledContainer>
        <StyledSubTitle>
          <Title2>Customer Success Stories</Title2>
        </StyledSubTitle>
        <Columns isCentered>
          <Okroo />
          <Mama />
          <Payklever />
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
