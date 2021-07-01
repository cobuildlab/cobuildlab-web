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
import GeeksAcademy from '../../components/services/details/customer-success-stories/card/GeeksAcademy';
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

const ProductDevelopment = () => (
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
          title={'Product Development'}
          paragraph={
            'Product development covers the complete process of bringing a new product to market. We conceptualize and design product development and Integration processes that plug gaps in functionality, while accomplishing business objectives.'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-Startup-Product-Development.svg'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'We put your \n'}
          titleOrange={'Idea in the Market'}
          text={
            <>
              We help you to study, design, build your idea and release it as a final product into
              the market.
              <br />
              <br />
              We can help you identify emerging trends, understand market requirements, and create
              software products that add value for your customers.
            </>
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Best Product Development process ever!\n'}
          otherText={
            'We’re focused on understanding your users’ needs, validating supposition quickly, reducing risks, and improving our processes to ensure an efficient and fluid product development life cycle, getting into an end-to-end experience.'
          }
          otherText2={
            'Once we understand your vision, we assemble an A-team of engineers, designers, and developers to bring your product to life.'
          }>
          <StaticImage src={'./../../assets/images/service/product-development-ilustration.png'} />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'How can Product Development help you?'}
          leftText={[
            'It creates a culture of innovation.',
            'It helps to drive your higher value proposition.',
            'It can grow your professional network.',
          ]}
          rightTextList={[
            'Helps in expanding the market for the products.',
            'Helps in facing competition successfully and effectively.',
            'Increase the goodwill and profit earning possibilities.',
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
          <GeeksAcademy />
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

export default ProductDevelopment;
