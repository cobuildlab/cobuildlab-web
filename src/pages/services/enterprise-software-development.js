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
import Massone from '../../components/services/details/customer-success-stories/card/Massone';

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

const EnterpriseSoftwareDevelopment = () => (
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
          title={'Enterprise Software Development'}
          paragraph={
            "We develop software that meets the needs of your organization. Through Enterprise Software Development we help you build useful tools to improve your company's specific issues, such as fleet management, planning supply and demand, processing orders, and control over inventory."
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/iconos-Logistic-Enterprise-Software-Development.svg'
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
          title={'Challenge-solving '}
          titleOrange={'software development'}
          text={
            '' +
            'With Logistics or Supply Chain Software Development you will be able to give solutions to many of ' +
            'the challenges displayed in logistics processes:'
          }
          listLeft={[
            'Supply Chain Complexity: Multiple channels to market.',
            'Consumer demands: Expected speed, quality requirements met, and services.',
          ]}
          listRight={['Supply Chain Volatility: Avoiding delays, backlogs, and bottlenecks.']}
          otherText={
            'From avoiding delays and predicting demand to tracking delivery times, and more, there are many solutions that an Enterprise Software Development will provide.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Reduce risks'}
          otherText={
            'With Software Development, it is possible to modernize and simplify the flow of logistical operations. This will help your business array with operations with tools for transactions, processes, and suppliers.'
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Enterprise Software Development Benefits\n'}
          leftText={[
            'Access to customer information.',
            'Enhanced business reporting tools.',
            'Uplifted cash flow.',
          ]}
          rightTextList={[
            'Improved data and cloud security.',
            'Effective demand forecasting and lean inventory.',
            'Transparency through the business.',
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
          <Massone />
          <MyVoice />
          <JobCore />
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

export default EnterpriseSoftwareDevelopment;
