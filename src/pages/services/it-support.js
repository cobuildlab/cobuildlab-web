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
import { StaticImage } from 'gatsby-plugin-image';

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
          title={'It Support'}
          paragraph={
            <>
              <>
                From business technology support to strategic consulting,
                <br />
                we have IT solutions for your organizational needs.
              </>
            </>
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-Main-Services-It-Support.svg'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Improve your business'}
          titleOrange={'for the next level'}
          text={
            "Enhance your organization's infrastructure with our industry-leading enterprise IT support services. Whether you have an immediate short-term technical project or are looking for a reliable long-term IT partner, Cobuild Lab is here to help."
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Dedicated Support\n'}
          otherText={
            'For whom is a web created? This is the portal that your business will use to directly contact your potential customers. Impress your target with our Web Design service.'
          }
          otherText2={
            'Our business IT services provide flexible access to a team of highly motivated and dedicated professionals with in-depth knowledge of a wide range of infrastructure, security, mail systems, and applications. We offer a business IT support service that is trully tailored to your requirements, providing comprehensive backup and support in the event of an IT disaster.'
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Benefits of IT Outsourcing Support in your Business'}
          leftText={[
            'Reduce business interruptions by upgrading old technology and moving away from the breakdown/repair support model.',
            'Provide a single point of contact for faster IT support and consistent response time and resolution.',
          ]}
          rightTextList={[
            'Ensure your systems and data are safe and backed up.',
            'Harnessing the power of cloud infrastructure and applications for your business.',
            'Save time that would otherwise spent recruiting, training, and managing multiple vendors.',
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

export default WebDevelopment;
