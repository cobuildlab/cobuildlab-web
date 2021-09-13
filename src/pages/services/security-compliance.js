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

const IotDevelopment = () => (
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
          title={'Security Compliance'}
          paragraph={
            'We help your business identify vulnerabilities and assess business risk by meeting HIPAA compliance, GDPR compliance, and other security compliance mandates more efficiently and effectively.'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-security.png'}
              alt="Security Compliance"
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'What is a '}
          titleOrange={'Security Compliance?'}
          text={
            'Security compliance drives businesses to practice due diligence to protect digital assets and maintain a trusting relationship with consumers. When a company chooses to do business in a country with strict security laws or in a heavily regulated market like finance or healthcare, they must ensure that their business meets privacy laws to prevent hefty penalties. Like standard security protocols, compliance focuses on both technical and business needs.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Compliance Expertise Tailored to Your Needs'}
          otherText={
            'We help you navigate the dizzying list of security compliance standards and frameworks, assess your current controls against requirements and guide subsequent changes that can be required to meet these global requirements. Go beyond traditional compliance solutions with services that reduce your risk by addressing your organization’s unique opportunities and challenges.'
          }>
          <StaticImage
            src={'./../../assets/images/service/ilustracion-security-and-compliance.png'}
            alt={'Illustration Security Compliance'}
          />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Security Compliance.'}
          text={
            <>
              <p>
                <b>HIPPA Compliance</b>
                <p>
                  Protecting customer data represents a challenge for organizations. Our team{"'"}s
                  custom databases help them organize and protect their records, while network
                  infrastructure security enhancements prevent data from falling into the wrong
                  hands. We{"'"}ve helped thousands of registries stay secure and hundreds of
                  organizations comply with digital compliance.
                </p>
              </p>
              <p>
                <b>GDPR Compliance</b>
                <p>
                  The EU{"'"}s General Data Protection Regulation (GDPR) is one of the most
                  comprehensive government-imposed data privacy frameworks implemented to date. It
                  went into effect in May 2018 and is meant to protect the data privacy of EU
                  citizens. However, this compliance regulation doesn{"'"}t just apply to European
                  companies; anyone who processes the data of European citizens required to comply.
                </p>
              </p>
            </>
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

export default IotDevelopment;
