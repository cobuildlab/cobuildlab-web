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

import MyVoice from '../../components/services/details/customer-success-stories/card/MyVoice';
import JobCore from '../../components/services/details/customer-success-stories/card/JobCore';
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
          title={'Custom Inventory Management System'}
          paragraph={
            "Time is the most valuable asset to make your company more productive and meet your customers' current demands.\n" +
            '\n' +
            'Low code and no-code development is not only a trend, they also allow you to develop an accessible solution, with fewer resources, in shorter times, and easier management.\n'
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/iconos-custom-management-inventory-system.png'
              }
              alt="iconos-custom-management-inventory-system"
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'What is '}
          titleOrange={'it?'}
          text={
            'An Inventory Management System is software used to track inventory levels, sales, order fulfillment, and complete sales processes online. It can be developed for desktop and mobile systems for online sellers as well as physical stores.'
          }
          otherText={
            'What Custom Inventory Management Software does is handling the entire inventory process from quotation to fulfillment. Along the way, it also keeps track of customer, vendor, purchase orders, shipments, and other records, so you can follow up on which products are being sold and in what quantity.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Why should you get a custom inventory management system?'}
          textList={[
            'Single workflow automation.',
            'Inventories track & view of available stocks.',
            'Control costs and delivery improvement.',
            'Automatic and easy reordering.',
            'Software integration.',
          ]}
          textList2={[
            'Inventory visibility with system-generated reports.',
            'Forecast future demand.',
            'Custom report on specific criteria.',
            'Ongoing 24/7 technical support.',
            'High-speed private cloud solution.',
          ]}>
          <StaticImage src={'./../../assets/images/service/management-system.png'} />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Benefits of a Custom Inventory Management System'}
          text={
            'Its basic goal is to provide a clear picture of stock levels. With a custom inventory management system, you get:'
          }
          leftText={[
            'The ability to automate a single workflow. The custom solution provides an industry-specific solution that easily incorporates new features that make your back-end operations easier.',
            'Keeps track of all your inventories and provides a consolidated view of available stocks.',
            'Control costs and improve delivery by setting the right customer expectations.',
            'Automatic and easy reordering',
            'It can be integrated with various other software systems, including enterprise resource planning (ERP) and accounting systems',
          ]}
          rightTextList={[
            'Provides inventory visibility at each location at any time and date through system-generated reports',
            'Forecast future demand by analyzing trends in inventory data and inventory according to the demand',
            'Custom reports, a much-needed business intelligence tool for a wide variety of business verticals, as data is filtered based on specific criteria',
            'Ongoing 24/7 technical support with proper analysis of business requirements',
            'High-speed private cloud solution. If your solution is hosted on a private cloud, it offers better control, expandable bandwidth, security, and superior performance in terms of speed and connectivity',
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
          <JobCore />
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

export default WebDevelopment;
