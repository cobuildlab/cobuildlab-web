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
          title={'Custom Project Management System'}
          paragraph={
            'Take your company’s productivity through the roof with custom workflows that your entire team can adopt.'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-Main-Services-Agile.svg'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Customize your'}
          titleOrange={'workflow'}
          text={
            'Optimize and manage your projects with collaborative tools and a web-based project management system tailor-made exactly for your needs.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Manage everything!'}
          otherText={
            "Tasks, reminders, calendars, to-do lists for you and your teams, all in one place! It's not often that a task jumps directly from open to close. Add custom workflows for your spaces and projects to track the progress of tasks."
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'What are the benefits of having your own Project Management System?'}
          leftText={[
            'Full control and access to the software and customizable data.',
            'Manage customers, suppliers, and prospects.',
            'Manage tasks and task groups to optimize time management.',
            'Communication with clients and the team in each task or many tasks.',
          ]}
          rightTextList={[
            'Calendar, notifications, and reminders about due dates, changes, and events.',
            'Create and manage users and groups with ease.',
            'Generate productivity reports, team time card reports, team availability reports, project hours, task groups, and due to date reports.',
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
