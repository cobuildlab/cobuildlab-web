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
    <SeoMetaTags
      title="It Support"
      description="From business technology support to strategic consulting, we have IT solutions for your organizational needs."
    />
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
            'From business technology support to strategic consulting, we have IT solutions for your organizational needs.'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-Main-Services-It-Support.svg'}
              alt="It Support"
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Take your business'}
          titleOrange={'to the next level'}
          text={
            "Enhance your organization's infrastructure with our industry-leading enterprise IT support services. Whether you have an immediate short-term technical project or are looking for a reliable long-term IT partner, Cobuild Lab is here to help."
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Dedicated Support'}
          textList={[
            'Reduce business interruptions.',
            'Faster IT support.',
            'Backed up systems & data.',
          ]}
          textList2={[
            'Cloud infrastructure and applications.',
            'Save time avoiding multiple vendors.',
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
          title={'Benefits of outsourcing IT support for your business'}
          leftText={[
            'Reduce business interruptions by upgrading old technology and moving away from the breakdown/repair support model.',
            'Provide a single point of contact for faster IT support and consistent response time and resolution.',
          ]}
          rightTextList={[
            'Ensure your systems and data are safe and backed up.',
            'Harnessing the power of cloud infrastructure and applications for your business.',
            'Save time that would otherwise be spent on recruiting, training, or managing multiple vendors.',
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
