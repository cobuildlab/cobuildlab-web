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

import Massone from '../../components/services/details/customer-success-stories/card/Massone';
import Avsee from '../../components/services/details/customer-success-stories/card/Avsee';
import Propagad from '../../components/services/details/customer-success-stories/card/Propagad';

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

const ProcessAutomation = () => (
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
          title={'Process Automation'}
          paragraph={
            'Reach new heights of productivity and reduce the costs and errors of manual tasks with a Process Automation Software.  Make the most of valuable employee time introducing efficiency to workflows across your business. Automate your enterprise and take full advantage of your resources.'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-Logistic-Process-Automation.svg'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <ServicesSection2
        title={'Discover New'}
        titleOrange={' value for your customers'}
        text={
          'We’ll help you integrate new technology that’ll make your processes run smoothly on their own, increasing their effectiveness and simplicity while expanding their reporting abilities. That will unlock new value features that meet the constantly evolving expectations of your customers.'
        }
      />
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Increase your Revenue Streams'}
          otherText={
            'Over-delivering on customer service is the key to increasing your revenue streams. With automation, they’ll enjoy a smooth experience accessing information at any given time. Avoid printing, sign and scan with automated forms and workflows.'
          }
          otherText2={
            'Get rid of monotonous manual data entry with integrated systems and databases. Automatically support all mobile devices and accelerate approval processes with 24/7 access from anywhere.'
          }>
          <StaticImage src={'./../../assets/images/service/process-automation.png'} />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Process Automation For The Logistics and Supply Chain Industries Benefits'}
          leftText={[
            'Leverage the power of Optimization driven by Machine Learning and Artificial Intelligence.',
            'The solution of a wide range of challenges.',
            'Hyper-connectivity among devices with Internet of Things.',
          ]}
          rightTextList={[
            'Maximum visibility across factors to improve decision-making.',
            'The satisfaction of the critical needs of the industry, such as optimization, visibility, connectivity, efficiency, and automation.',
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
          <Massone />
          <Avsee />
          <Propagad />
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

export default ProcessAutomation;
