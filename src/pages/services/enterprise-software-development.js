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
            'It is a software developed to meet the needs of an organization, company, enterprise, or business that already exists and has a system available. The main objectives are working in synergy to accomplish the main objective of this organization. ' +
            'By applying this development, your business gets useful tools to develop the company, such as fleet management, planning supply and demand, processing orders, and control over inventory.'
          }
          paragraph2={
            <>
              <ul>
                <li>• More value for my enterprise.</li>
                <li>• My enterprise needs this.</li>
                <li>• Risk reduction for my enterprise.</li>
                <li>• Learn more about this.</li>
              </ul>
            </>
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
            'Supply Chain Volatility: Avoiding delays, backlogs, and bottlenecks.',
          ]}
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
          textList={[
            'With a Software Development, it is possible to modernize and simplify the flow of logistical operations.\n',
            'This will help your business array with operations with tools for transactions, processes, and suppliers.\n',
            'Paperwork and spreadsheets to simplify management won’t be needed anymore.',
          ]}
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

export default EnterpriseSoftwareDevelopment;
