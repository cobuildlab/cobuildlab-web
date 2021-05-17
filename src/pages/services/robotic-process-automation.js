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
          paragraph={''}
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-robotic-process-automation.png'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Accelerate and optimize '}
          titleOrange={'tasks and processes with a scalable digital workforce'}
          text={
            'Robotic Process Automation (RPA) is a type of technological automation that is transforming the way businesses operate.RPA software robots manipulate and communicate with your business systems and applications to speed up processes and reduce human resources workload.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Why RPA software?'}
          otherText={
            'It differs from other automation solutions by its flexibility and ability to integrate workflows efficiently across the enterprise. It is a mainly transactional process automation method based on specific rules. It’s software that learns from a business user and helps him with relatively simple tasks using predefined logical rules to deliver results.'
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Benefits of RPA software'}
          text={
            "This solution increases productivity, improves accuracy, and helps your business expand by delegating manual and repetitive tasks to robots. \nRPA integrates well with your existing IT infrastructure and requires no additional installation; companies don't have to invest heavily in automating essential processes. It works in different applications, platforms, and departments."
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
