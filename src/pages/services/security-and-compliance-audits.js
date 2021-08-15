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
          title={'Security and Compliance Audits'}
          paragraph={
            'We provide the consulting services you need to uncover weaknesses in your security posture and keep on  with industry compliance requirements. We offer security assessment and assurance covering a wide range of solutions.'
          }
          img={
            <StaticImage src={'./../../assets/images/service/card/iconos-security.png'} alt="" />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Keep your '}
          titleOrange={'Data safe'}
          text={
            "Your company's infrastructure is continually changing, new technologies and devices are added, others are phased out, and users with multiple devices come and go. In such an environment, cybercrime is an ongoing threat. Maintaining compliance with mandatory information security standards and best practices for your industry can be challenging, and we are ready for it. From GDPR to ADA, you have to make sure your business and its online applications are accessible, user-friendly, and secured to meet the latest federal and international regulations and remain accessible to your users."
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Why Choose Us for the Security of your Data?'}
          otherText={
            "Our combined 50 years of information security consulting experience allows us to work on improving our clients' security processes and solutions. Our consultants are multi-certified and have worked on large and complex consulting assignments for some of the world's largest companies in various industry sectors."
          }
          otherText2={
            'We recognize the benefits of artificial intelligence, but also understand that technology alone can’t deliver compliance. Our plans combine both technology and teamwork to get certified and customized service with on-demand support and an Expert Accessibility Advisor for legal consultation.'
          }>
          <StaticImage src={'./../../assets/images/service/ilustration-security.png'} />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'We can help you at every step of the Audit Process.'}
          text={
            <>
              <p>
                Don{"'"}t waste valuable business time worrying about regulations and potential
                fines.
              </p>
              <p>
                <b>We help you to:</b>
              </p>
              <ul>
                <li>• Comply with legal requirements.</li>
                <li>
                  • Benefit from our experience in collaborating with industry peers to avoid audit
                  redundancy and standardize the industry approach.
                </li>
                <li>• Improve security practices and reduce vulnerabilities.</li>
                <li>• Protect the integrity of your cargo.</li>
                <li>• Accelerate response times at customs.</li>
              </ul>
              <br />
              <p>
                <b>ADA Compliance</b>
                <p>
                  Americans with Disabilities Act Standards for Accessible Design (ADA) doesn{"'"}t
                  only regulate the infrastructure of your office space or business. It also
                  pertains to your business’s online home. Our digital compliance team will analyze
                  your website or application and ensure that it offers a seamless experience for
                  all users, regardless of their abilities, protecting you from lawsuits and
                  government fines.
                </p>
              </p>
              <p>
                <b>HIPPA compliance</b>
                <p>
                  Protecting customer data represents a challenge for organizations. Our team{"'"}s
                  custom databases help them organize and protect their records, while network
                  infrastructure security enhancements prevent data from falling into the wrong
                  hands. From small businesses to large businesses to nonprofits, we{"'"}ve helped
                  thousands of registries stay secure and hundreds of organizations comply with
                  digital compliance.
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
