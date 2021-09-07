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
import Pitazo from '../../components/services/details/customer-success-stories/card/Pitazo';
import Weedmatch from '../../components/services/details/customer-success-stories/card/Weedmatch';

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
          title={'Custom Warehouse Management System'}
          paragraph={
            'The Warehouse Management System (WMS) is a solution that handles the warehouse or distribution center of inventory and activities. We develop customizable standalone WMSs and cloud-based WMSs with supply chain modules and integrated ERP systems to streamline all business processes across various departments in an all-in-one, unified solution.'
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/icono-custom-warehouse-management-system-02.svg'
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
          title={'What is a Warehouse '}
          titleOrange={'Management System?'}
          text={
            'A Warehouse Management System is a monitoring application and handles the day-to-day tasks of a warehouse. WMS systems allow companies to control and oversee third-party logistics processes.'
          }
          otherText={
            'We integrate your custom WMS with marketplaces, e-commerce platforms, shipment carriers, and accounting/ERP systems to promote interoperability, flexibility, and scalability.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Why should you  get your own Custom Warehouse Management System?'}
          otherText={
            "Since warehouse operations can differ based on the market and the particular business needs of each customer, it's relevant to fulfill each one of them. Such situations always demand customized supply chain solutions. As a software development company, we develop comprehensive WMSs designed to make it easy for providers, wholesalers, manufacturers, and retailers to manage their inventory, automate routine tasks, and obtain complete visibility of their warehouse operations."
          }>
          <StaticImage
            src={
              './../../assets/images/service/ilustracion-custom warehouse-management-system-01.svg'
            }
          />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Features of a WMS'}
          text={'Here are just a few of the many capabilities included in our custom WMS:'}
          leftText={[
            'Custom Reports & Dashboards.',
            'Barcoding / RFID Reader.',
            'Multi-Locational Tracking.',
            'Forecasting.',
            'Inventory Management.',
            'Order Management.',
            'Shipping & Logistics Management.',
            'Purchasing & Receiving.',
          ]}
          rightTextList={[
            'Returns Management.',
            'Real-Time Synchronization.',
            'Quality Management.',
            'Receiving / Putaway Management.',
            'Alerts/Notifications.',
            'Activity Tracking.',
            'Billing & Contract Management.',
            'Plug-n Play Store/Carrier Integration.',
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
