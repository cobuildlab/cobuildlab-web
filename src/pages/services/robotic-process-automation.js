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
          title={'Robotic Process Automation'}
          paragraph={
            'Robotic Process Automation (RPA) is a type of technological automation that is transforming the way businesses operate. RPA software robots manipulate and communicate with your business systems and applications to speed up processes and reduce human resources workload.'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos_Robotic-Process-Automation.svg'}
              alt="Robotic Process Automation"
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Why RPA '}
          titleOrange={'software?'}
          text={
            'It differs from other automation solutions by its flexibility and ability to integrate workflows efficiently across the enterprise. It is a mainly transactional process automation method based on specific rules. It’s software that learns from a business user and helps him with relatively simple tasks using predefined logical rules to deliver results.\n'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Benefits of RPA software'}
          textList={[
            'Minimize costs.',
            'Increase the speed of execution.',
            'Quick reports when required.',
            'Tracking the process at all times.',
          ]}
          textList2={[
            'Control of results in real-time.',
            'Can be updated.',
            'Eliminate paper buildup.',
          ]}>
          <StaticImage
            src={'./../../assets/images/service/services-details3.png'}
            alt={'Illustration Services'}
          />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'What are the main advantages of RPA software?'}
          leftText={[
            "Minimize costs: the team's workload is improved, reducing resources.",
            'The number of errors is minimized: it is necessary to avoid human or communication errors.',
            'Significantly increase the speed of execution: it is necessary to reduce the time.',
          ]}
          rightTextList={[
            'Possibility of obtaining reports: quickly at the moment.\n',
            'Tracking: allows you to follow the traceability of the process at all times.',
            'Control of results in real-time: they can be updated.',
            'Eliminate paper buildup - Minimize costs for both media and printing.',
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
