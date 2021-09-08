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
          title={'Material Requirements Planning System'}
          paragraph={
            'A Material Requirement Planning System allows you to plan and schedule tasks related to your production more efficiently and effectively. Custom software lets you automate manufacturing activities as well as the issuing of delivery and purchase orders.'
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/iconos-material-requirements-planning-system-02.svg'
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
          title={'It’s time for you to '}
          titleOrange={'automate your processes'}
          text={
            "Controlling inventories, elaborating bills of materials, administrative tasks, calculating the time in which purchase orders should be issued, will become much easier and faster once you start using a software product tailored to your company's needs."
          }
          otherText={
            'We will build for you a top-notch Custom Material Requirement Planning System that allows you to reduce production costs, save money, avoid surplus inventory and optimize processes.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'What are the benefits of a Material Requirement Planning System?'}
          textList={[
            "Have up-to-date information on your company's production at all times to carry out all work orders.",
            'Reduce or even eliminate overtime as well as  temporary hires for production tasks.',
          ]}
          textList2={[
            'Improve the relationship with your customers and suppliers, by complying with them in a timely manner.',
            'Keep inventory at optimal levels and decrease inventory costs.',
            'Better manage supplier deliveries and Increase your company’s overall productivity.',
          ]}>
          <StaticImage
            src={
              './../../assets/images/service/ilustracion-material-requirements-planning-system.svg'
            }
          />
        </ServicesSection3>
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
