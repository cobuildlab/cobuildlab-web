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

import MyVoice from '../../components/services/details/customer-success-stories/card/MyVoice';
import Mama from '../../components/services/details/customer-success-stories/card/Mama';
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

const DigitalTransformation = () => (
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
          title={'Digital Transformation'}
          paragraph={
            'Bringing enterprises forward is possible when applying Digital Transformation, by increasing profit, revenue, agility and improving productivity.'
          }
          paragraph2={
            <>
              Solve the uncertainty of not knowing what your business maturity is regarding its
              digital blueprint. Before Digital Transformation adoption, you need to know exactly
              where your strengths and weaknesses lie.
            </>
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-Logistic-Digital-Transformation.svg'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'What is '}
          titleOrange={'it?'}
          text={
            'Digital Transformation Assessment is the process through which we determine your company’s baseline or where it exactly stands regarding its digital blueprint. Before embarking on a Digital Transformation you need to know exactly where your strengths and weaknesses lie.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'How does it work?'}
          otherText={
            'Our own Digital Transformation Assessment tool helps you determine through a simple questionnaire what’s the level of digital maturity of your business and what are your priorities and opportunities.'
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'How can digital transformation help me and benefit me ?'}
          text={'It will let you establish key points like:\n'}
          leftText={[
            'What your clients want.',
            'What are your competitors doing.',
            'What are your existing technologies.',
          ]}
          rightTextList={[
            'What skills you’ll need for the future.',
            'What processes you need to improve.',
          ]}
          otherText={
            'Any decision regarding your digital transformation process will be based on the exact level of investment required to accomplish your goals efficiently and without wasting any time or resources.'
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
          <Mama />
          <Weedmatch />
          <MyVoice />
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

export default DigitalTransformation;
