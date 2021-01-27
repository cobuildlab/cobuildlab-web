import React from 'react';
import { Container, Hero, HeroHeader, Section, Columns } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';
import SeoMetaTags from '../components/SeoMetaTags';

import ServicesHeader from '../components/services/ServicesHeader';
import ServicesCard from '../components/services/card/ServicesCard';

import Contact from '../components/2020/HomePageContact';
import ServicesBannerBackgroundTop from '../components/services/ServicesBannerBackgroundTop';
import ServicesBannerBackgroundBottom from '../components/services/ServicesBannerBackgroundBottom';
import H4 from '../components/Typography/H4';

import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledTitle = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

const Services = () => (
  <Layout>
    <SeoMetaTags title="Services" description="Privacy Policy for the Cobuild Lab" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
    </Hero>
    <Section>
      <ServicesBannerBackgroundTop />
      <ServicesBannerBackgroundBottom />
      <Container>
        <ServicesHeader />
      </Container>
    </Section>
    <Section>
      <StyledTitle>
        <H4>Main Services</H4>
      </StyledTitle>
      <Columns isCentered>
        <ServicesCard
          title={'Web'}
          subtitle={'Development'}
          cover={'We work behind the curtain to make your website gorgeous and engaging'}
          to={'web-development'}
          image={
            <StaticImage
              src={'./../assets/images/service/card/iconos-Main-Services-Web-Development.svg'}
              alt=""
            />
          }
        />
        <ServicesCard
          title={'APP'}
          subtitle={'Development'}
          cover={'We develop native apps for iOS and Android'}
          to={'app-development'}
          image={
            <StaticImage
              src={'./../assets/images/service/card/iconos-Main-Services-APP-Development.svg'}
              alt=""
            />
          }
        />
      </Columns>
      <Columns isCentered>
        <ServicesCard
          title={'Cross-Platform'}
          subtitle={'Development'}
          cover={'Let us take your app to multiple platforms and devices'}
          to={'cross-platform-development'}
          image={
            <StaticImage
              src={
                './../assets/images/service/card/iconos-Main-Services-Cross-Platform-Development.svg'
              }
              alt=""
            />
          }
        />
        <ServicesCard
          title={'Web'}
          subtitle={'Design'}
          cover={'We create appealing and beautiful content for your web'}
          to={'web-design'}
          image={
            <StaticImage
              src={'./../assets/images/service/card/iconos-Main-Services-Web-Design.svg'}
              alt=""
            />
          }
        />
      </Columns>
    </Section>
    <Section>
      <StyledTitle>
        <H4>If you’re a Startup</H4>
      </StyledTitle>
      <Columns isCentered>
        <ServicesCard
          title={'MVP Software'}
          subtitle={'Development'}
          cover={' Validate and launch your product in a speedy and efficacious way'}
          to={'mvp-software-development'}
          image={
            <StaticImage src={'./../assets/images/service/card/iconos-Startup-MVP.svg'} alt="" />
          }
        />
        <ServicesCard
          title={'Product'}
          subtitle={'Development'}
          cover={'Let us turn your idea into a viable product'}
          to={'product-development'}
          image={
            <StaticImage
              src={'./../assets/images/service/card/iconos-Startup-Product-Development.svg'}
              alt=""
            />
          }
        />
      </Columns>
      <Columns isCentered />
    </Section>
    <Section>
      <StyledTitle>
        <H4>If you’re a Small Business Owner</H4>
      </StyledTitle>
      <Columns isCentered>
        <ServicesCard
          title={'Custom Software'}
          subtitle={'Development'}
          cover={'Tailor-made software to take care of your business needs'}
          to={'custom-software-development'}
          image={
            <StaticImage
              src={
                './../assets/images/service/card/iconos-Small-Business-Custom-Software-Development.svg'
              }
              alt=""
            />
          }
        />
        <ServicesCard
          title={'Custom Customer'}
          subtitle={'Management System'}
          cover={
            'Centralize, optimize and streamline your customer’s communication. The better you know your customers, the stronger your relationships will be with them'
          }
          to={'custom-customer-management-system'}
          image={
            <StaticImage
              src={
                './../assets/images/service/card/iconos-Small-Business-Field-Service-Management-System.svg'
              }
              alt=""
            />
          }
        />
      </Columns>
      <Columns isCentered>
        <ServicesCard
          title={'Field Service'}
          subtitle={'Management System'}
          cover={
            'Get automated the field operations of your team and services through mobile systems'
          }
          to={'field-service-management-system'}
          image={
            <StaticImage
              src={
                './../assets/images/service/card/iconos-Small-Business-Field-Service-Management-System.svg'
              }
              alt=""
            />
          }
        />
        <ServicesCard
          title={'Custom Learning'}
          subtitle={'Management System'}
          cover={
            'Boost the learning performance of your employees on the most recent operational or technological changes'
          }
          to={'custom-learning-management-system'}
          image={
            <StaticImage
              src={
                './../assets/images/service/card/iconos-Small-Business-Custom-Learning-Management-System.svg'
              }
              alt=""
            />
          }
        />
      </Columns>
    </Section>
    <Section>
      <StyledTitle>
        <H4>For Logistics and Supply Chain Enterprises</H4>
      </StyledTitle>
      <Columns isCentered>
        <ServicesCard
          title={'Enterprise Software'}
          subtitle={'Development'}
          cover={
            'Zero-waste process combined with more than 50 years of experience.\n' +
            'Risk-costs reduction, more effective tracking, and faster delivery date.\n' +
            'Efficiency rate will increase with the right guidance and assistance.\n'
          }
          to={'enterprise-software-development'}
          image={
            <StaticImage
              src={
                './../assets/images/service/card/iconos-Logistic-Enterprise-Software-Development.svg'
              }
              alt=""
            />
          }
        />
        <ServicesCard
          title={'Process'}
          subtitle={'Automation'}
          cover={'Revolutionize your process and save time and money'}
          to={'process-automation'}
          image={
            <StaticImage
              src={'./../assets/images/service/card/iconos-Logistic-Process-Automation.svg'}
              alt=""
            />
          }
        />
      </Columns>
      <Columns isCentered>
        <ServicesCard
          title={'Digital'}
          subtitle={'Transformation'}
          cover={
            'Intelligence processes based on enterprises goals\n' +
            'Intelligent guidance / assistance / direction for digital transformation opportunities\n' +
            'Smart guidance / assistance / direction for digital transformation opportunities\n' +
            'Smart digital transformation opportunities guidance\n'
          }
          to={'digital-transformation'}
          image={
            <StaticImage
              src={'./../assets/images/service/card/iconos-Logistic-Digital-Transformation.svg'}
              alt=""
            />
          }
        />
      </Columns>
    </Section>
    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
);

export default Services;
