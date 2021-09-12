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

import LeadVolt from '../../components/services/details/customer-success-stories/card/LeadVolt';
import Avsee from '../../components/services/details/customer-success-stories/card/Avsee';
import Okroo from '../../components/services/details/customer-success-stories/card/Okroo';

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

const WebDesign = () => (
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
          title={'Web Accessibility Compliance'}
          paragraph={
            "Whether it's for a Government acquisition, a desire to make your services more accessible, or because your organization is facing litigation, we can audit, identify and improve accessibility compliance issues in your website.."
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/icon-web-accessibility-compliance.svg'}
              alt="Web Accessibility Compliance"
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'What is '}
          titleOrange={'Web Accessibility?'}
          text={
            <>
              Web Accessibility means that websites, tools, and technologies must be designed and
              developed so people with disabilities can use them. When websites are designed and
              developed with accessibility in mind, all visitors have equal access to site content.
              <br />
              <br />
              The Web Accessibility Compliance landscape grows more regulated over time which
              results in many companies finding themselves needing a major digital overhaul.
              Regulation changes stem from the fact consumer-buying behavior shifted from phone and
              in-person to digital.
            </>
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'What Do We Do For Your Web Accessibility Compliance?'}
          otherText={
            'We will partner closely with you to understand your required compliance standards and how to meet them. Whether you have received a notice that your website violates website accessibility standards or you need to be proactive and assure you are providing access to everyone, you will need a website accessibility compliance service.'
          }
          otherText2={
            'Also, we offer an inclusive web accessibility solution to customers with disabilities by integrating a suite of assistive technologies alongside accessibility compliance will enhance the digital customer experience. In return, your organization gets an inclusive digital presence and makes your brand accessible to all.'
          }>
          <StaticImage
            src={
              './../../assets/images/service/ilustracion-ilustracion-web-accessibility-compliance.svg'
            }
            alt={'Illustration Web Accessibility Compliance'}
          />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Accessibility Compliances'}
          text={
            <>
              <span>
                <b>ADA Compliance</b>
                <p>
                  Americans with Disabilities Act Standards for Accessible Design (ADA) doesn’t only
                  regulate the infrastructure of your office space or business. It also pertains to
                  your business’s online home, your website. Our digital compliance team will
                  analyze your website or application and ensure that it offers a seamless
                  experience for all users, regardless of their abilities, protecting you from
                  lawsuits and government fines.
                </p>
              </span>
              <span>
                <b>WCAG Compliance</b>
                <p>
                  WCAG stands for the Web Content Accessibility Guidelines. They are the most
                  important guidelines for web accessibility policy and set the standard for web
                  accessibility legislation in most countries around the world. The WCAG isn{"'"}t a
                  set of laws that can be enforced but many governments have adopted it as the
                  standard for their accessibility laws. Effectively, WCAG compliance is the best
                  means for achieving compliance with most worldwide legislations.
                </p>
              </span>
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
          <LeadVolt />
          <Avsee />
          <Okroo />
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

export default WebDesign;
