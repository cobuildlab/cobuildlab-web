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
import GeeksAcademy from '../../components/services/details/customer-success-stories/card/GeeksAcademy';
import Pitazo from '../../components/services/details/customer-success-stories/card/Pitazo';

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

const CustomLearningManagmentSystem = () => (
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
          title={'Custom Learning Management System'}
          paragraph={
            'For the needs of creating e-learning content, interactive, that you can integrate with other systems of your company (such as CRM), with customized reports or gamification, a custom learning management system is the best option.'
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/iconos-Small-Business-Custom-Learning-Management-System.svg'
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
          title={'Get a Custom Learning '}
          titleOrange={'Management System\n'}
          text={
            'With a CLMS, you can gather all your learning materials in one place and make them available to all learners in just one click. You can even create different groups of learners according to their functions or job positions.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Benefits of Custom Learning Management System\n'}
          textList={[
            'Improve the performance of your business/learners.',
            'Features tailored to your vision.',
            'Get the opportunity to leave the premises of a traditional office.',
            'Flexibility, scalability, and futureproof.',
            'Unlimited learners.',
            'High level of automation of eLearning management, which increases the productivity of trainers and trainees.',
          ]}
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Scale your Custom Learning Management System\n'}
          text={
            'Are you planning to expand your business online? We will translate your ideas into intelligent and powerful solutions. Our development will include business analysis, developing a technical specification, estimating the development cost, and planning the project.'
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
          <GeeksAcademy />
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

export default CustomLearningManagmentSystem;
