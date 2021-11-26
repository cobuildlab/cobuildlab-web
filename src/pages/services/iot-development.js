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
    <SeoMetaTags title="IoT Development" description="Iot Development" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
    </Hero>
    <Section>
      <ServicesBannerBackgroundBottom />
      <Container>
        <ServicesHeader
          title={'IoT Development'}
          paragraph={
            'We have rich experience in providing enterprise-class cloud\n' +
            'solutions, developing IoT applications for web or mobile apps with secure device\n' +
            'connectivity, developing algorithms and data analysis all under one roof.'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos_Internet-of-the-thing-IoT.png'}
              alt="IoT Development"
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Get your business in '}
          titleOrange={'the Intelligence of Things'}
          text={
            'We offer a wide range of IoT software development services from middleware\n' +
            'engineering and IoT data pipeline architecture to building sleek and practical web\n' +
            'and mobile applications for the users of connected systems.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Need a team skilled at IoT Development?'}
          otherText={
            'Our experience in creating interfaces across web, mobile, voice and chat is huge.\n' +
            'We can design and develop convenient and functional web and mobile applications\n' +
            'that will help users to easily navigate through your system and make sense of the\n' +
            'data it collects. Our development team formulates effective IoT implementation\n' +
            'strategies to seamlessly manage your business processes at reduced overhead\n' +
            'costs.'
          }>
          <StaticImage
            src={'./../../assets/images/service/IoT-ilustracion.png'}
            alt={'Illustration IoT'}
          />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Business benefits of IoT solutions'}
          leftText={[
            'Increased revenue: Software solutions that connect devices contribute to overall business optimization and modernization, amplifying return on investments.',
            'Workplace safety: IoT applications significantly increase safety conditions allowing remote monitoring and alerting.',
            'Higher productivity: Providing opportunities for real-time tracking, implementation of IoT solutions allows reducing mistakes and achieving greater efficiency of processes.',
          ]}
          rightTextList={[
            'Meaningful insights: By receiving information from a variety of sources and analyzing\n' +
              'it, IoT software provides businesses with the opportunity to make fast and smart\n' +
              'data-driven decisions.',
            'Reduced operating costs: Automating a range of manual tasks, IoT applications\n' +
              'contribute to the minimization of human-related errors and provide the ability for\n' +
              'smarter, more efficient resource allocation.',
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

export default IotDevelopment;
