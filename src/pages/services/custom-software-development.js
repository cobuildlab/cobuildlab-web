import React from 'react';
import { Columns, Container, Hero, HeroHeader, Section } from 'bloomer';
import 'bulma/css/bulma.css';
import '../../assets/scss/index.scss';

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

import Pitazo from '../../components/services/details/customer-success-stories/card/Pitazo';
import Massone from '../../components/services/details/customer-success-stories/card/Massone';
import Avsee from '../../components/services/details/customer-success-stories/card/Avsee';

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

const CustomSoftwareDevelopment = () => (
  <Layout>
    <SeoMetaTags
      title="Custom Software Development"
      description="A customized software tool optimizes processes, making them more effective and efficient because every function is designed based on your business activities, so there is no need to modify or adjust anything (as is the case of a commercial tool)."
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
          title={'Custom Software Development'}
          paragraph={
            'A customized software tool optimizes processes, making them more effective and\n' +
            'efficient because every function is designed based on your business activities, so\n' +
            'there is no need to modify or adjust anything (as is the case of a commercial tool).'
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/iconos-Small-Business-Custom-Software-Development.svg'
              }
              alt="Custom Software Development"
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Develop your '}
          titleOrange={'custom software tool'}
          text={
            'In that way, you’ll have a tool that responds to your specific processes and needs\n' +
            'allowing you to decide on issues such as gestures, functionalities, updates (if\n' +
            'required), changes in the tool (when your processes evolve), and that can be\n' +
            'monetized in the future converting it into a Saas product.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Benefits: Optimize your processes'}
          textList={['Optimizes Processes.', 'Upgradeable & Adaptable.']}
          textList2={[
            'Advantages over Your Competitors.',
            'Improve Customer Perception & Attention.',
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
          title={"“There is no business that a custom software tool can't help.”"}
          leftText={
            'Custom software development can be applied in any industry, process, or activity. Some of the most common are:'
          }
          rightTextList={[
            'Time and productivity management',
            'Customer relationship',
            'Communications',
            'Transport and delivery',
            'Supply Chain',
            'Logistics',
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
          <Pitazo />
          <Massone />
          <Avsee />
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

export default CustomSoftwareDevelopment;
