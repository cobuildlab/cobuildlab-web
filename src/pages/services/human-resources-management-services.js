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
          title={'Human Resources Management System'}
          paragraph={
            "The automation of repetitive and time-consuming tasks associated with human resources management frees up some of the company's most valuable employees, allowing their focus to shift to culture, retention, and other highly impactful areas."
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-human-resources.svg'}
              alt="Human Resources Management System"
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'What is a Human Resources '}
          titleOrange={'Management System (HRMS)'}
          text={
            'A Human Resources Management System (HRMS) is an information and reporting system that helps businesses automate and manage human resource processes.\n' +
            ' It is used to perform business processes and HR functions, combining systems and processes that connect human resource management and information technology through Human Resource software. It can be used in candidate recruiting, payroll management, leave approval, succession planning, attendance tracking, career progression, performance reviews, and the overall maintenance of employee information within your organization.\n'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Why Choose Us for your custom HRMS?'}
          otherText={
            'If your organization is thinking of switching to a new HRMS or considering an HRMS for the first time, Cobuild Lab is here to help. We offer a custom solution designed for the unique needs of your organization.'
          }
          otherText2={
            'With deep knowledge and experience in custom software development, our team provides the dedicated support that organizations like yours can rely on to achieve more together and increase visibility, maximize resources, and unify their workforce behind one mission.'
          }>
          <StaticImage
            src={'./../../assets/images/service/ilustracion-human-resources-01.png'}
            alt={'Illustration Human Resources Management System'}
          />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'What does an HRMS do?'}
          text={
            'The function of an HRMS is to automate HR processes and put information and HR task management at the fingertips of HR professionals, managers, and employees.\n' +
            '\n' +
            'Features of a comprehensive HRMS include:'
          }
          leftText={[
            'Storing employee data.',
            'Payroll administration and export.',
            'Benefits management.',
            'Expenses management.',
            'Document management.',
            'Attendance tracking (absenteeism, sickness, and holidays).',
          ]}
          rightTextList={[
            'Time logging.',
            'Performance evaluation.',
            'Recruitment and applicant tracking.',
            'Onboarding.',
            'API functionality.',
            'Data importing.',
            'Reporting.',
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
