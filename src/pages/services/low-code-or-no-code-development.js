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

const AppDevelopment = () => (
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
          title={'Low Code or \n' + 'No Code Development'}
          paragraph={
            "Time is the most valuable asset to make your company more productive and meet your customers' current demands.\n"
          }
          paragraph2={
            'Low code and no-code development is not only a trend, they also allow you to develop an accessible solution, with fewer resources, in shorter times, and easier management.\n'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-robotic-process-automation.png'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Low code and no-code tools'}
          titleOrange={'for your company’s improvement'}
          text={'Low code and no-code tools for your company’s improvement\n'}
          otherText={
            "When your customer's demands change, competition increases. \n" +
            '\n' +
            "The development of agile and low code or no-code software solutions is the best option to capitalize on the market with simple and functional tools that allow you to improve your company's processes and bring better service and more value.  \n"
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'How do we develop it?'}
          otherText={
            "The first step is to determine if your problem allows a low code or no-code solution. Then we'll select the best-finished components to start the development. In a short time, the tool will be ready and you'll be able to strengthen your company. Support is included.\n"
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Benefits of low code or no-code development'}
          text={'Get advantages like:'}
          leftText={[
            'Robust security processes\n',
            'One-click deployment',
            'You can build multi-platform apps at the same time',
          ]}
          rightTextList={['Time-saving and less-code', 'Reduced testing, and developers involved']}
          otherText={
            "The decision to implement this software solution depends on your needs. Tell us your story, and we'll help you decide if it applies and how we'll successfully develop it for your business.\n"
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

export default AppDevelopment;
