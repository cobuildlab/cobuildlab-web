import React from 'react';
import { Container, Hero, HeroHeader, Section } from 'bloomer';
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
import SuccessStories from '../../components/services/details/SuccesStories';
import Title2 from '../../components/Title2';
import ServicesSection2 from '../../components/services/details/ServicesSection2';
import { StaticImage } from 'gatsby-plugin-image';

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

const CustomCustomerManagementSystem = () => (
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
          title={'Customer Relationship Management System'}
          paragraph={
            'A CUSTOMER RELATIONSHIP MANAGEMENT SYSTEM is software where you can organize the details related to your customers, across all departments at your company. Anyone with access to the CRM can track and manage the journey of every lead and customer that interacts with your brand, website, or products.'
          }
          paragraph2={
            <>
              Get the fastest-growing software on the market today!, Contact us now, Get a FREE
              Consultation.
            </>
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/iconos-Small-Business-Custom-Customer-Management-System.svg'
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
          title={'Boosting \n'}
          titleOrange={'your productivity'}
          text={
            <>
              CRMs help your business grow better for several reasons. One of the simplest yet the
              most effective advantages is its ability to automate time-consuming, manual tasks by
              leveraging workflows.
              <br />
              <br />
              Whether you’re just looking to have software to organize and manage all
              customer-related information, make internal communication easier, convert more leads
              into customers faster, or improve your relationships with customers, a CRM can help.
            </>
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Ensuring your key customer-centric strategies\n'}
          otherText={
            'Improve your teamwork communication with your consumers. It’s more critical than ever for marketing and sales teams to function as a cohesive unit, and CRM systems are the perfect solution to help scaling organizations achieve that goal.\n'
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Why it’s so important to get a CRM System\n'}
          text={
            <>
              <p>
                Nothing about CRM is new, it is a tried and tested strategy. Businesses who have
                pursued a CRM system have witnessed an increase in their customer retention rates of
                up to 27%
              </p>
              <p>A CRM System Software provides your business solutions like:</p>
            </>
          }
          leftText={[
            ' Organize and simplify growth.',
            'Improve productivity.',
            'Increase sales',
            'Resolve the challenges of customer-facing teams.',
          ]}
          rightTextList={[
            'Create workflows to save you time.',
            'Automate your day-to-day tasks.',
            'Report on and analyze your processes.',
            'Real-time / multi-channel communication (Email, SMS, Phone Call)',
          ]}
        />
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

export default CustomCustomerManagementSystem;
