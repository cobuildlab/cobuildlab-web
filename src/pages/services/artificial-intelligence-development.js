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
          title={'Artificial Intelligence Development'}
          paragraph={
            'We help you integrate AI in your current infrastructure - you\n' +
            'increase customer engagement, eliminate human errors and boost profits. Our\n' +
            'Artificial Development Services include applications, computer vision apps, voice\n' +
            'assistants and chatbots.'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos_artificial-inteligence.png'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Redefine the way your company operates with \n'}
          titleOrange={'your customers through Artificial Intelligence'}
          text={
            'By extending human capabilities, the amazing AI technology strives to create\n' +
            'machines that learn and act to provide freedom from mundane and error-prone\n' +
            'tasks. The breakthrough capabilities of AI to think, learn and even perceive\n' +
            'sentiments are empowering businesses to create rich human-like experiences. Offer\n' +
            'a great customer experience and become smarter by implementing AI into your\n' +
            'products and business operations.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Expertly-Matched Talent for your AI Development project'}
          otherText={
            'Our Artificial Intelligence Software Development Company comprises Data\n' +
            'Scientists, AI analysts, Designers, Full-stack developers and Software\n' +
            'Architects.You will work hand-in-hand with our AI developers to augment your in-\n' +
            'house development teams and build AI applications, software solutions, and\n' +
            'machine learning algorithms that solve business problems in areas including\n' +
            'customer experience and supply chain.'
          }>
          <StaticImage src={'./../../assets/images/service/AI.png'} />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'By deploying the right AI technology, your business may gain the ability to:'}
          leftText={[
            'Save time and money by automating and optimising routine processes and tasks.',
            'Increase productivity and operational efficiencies.',
            'Make faster business decisions based on outputs from cognitive technologies.',
            'Avoid mistakes and "human error", provided that AI systems are set up properly.',
          ]}
          rightTextList={[
            'Use insight to predict customer preferences and offer them improved, personalised experiences.',
            'Mine vast amount of data to generate quality leads and grow your customer base.',
            'Increase revenue by identifying and maximising sales opportunities.',
            'Grow expertise by enabling analysis and offering intelligent advice and support.',
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
