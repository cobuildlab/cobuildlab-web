import React from 'react';
import { Container, Hero, HeroHeader, Section, Columns } from 'bloomer';
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
import ServicesCardProduct from '../../components/services/details/card/ServicesCardProduct';
import ServicesCardSoftware from '../../components/services/details/card/ServicesCardSoftware';
import ServicesCardTraining from '../../components/services/details/card/ServicesCardTraining';
import SuccessStories from '../../components/services/details/SuccesStories';
import Title2 from '../../components/Title2';
import ServicesSection2 from '../../components/services/details/ServicesSection2';

const StyledSubTitle = styled.div`
  text-align: center;
`;

const StyledSection2 = styled(Section)`
  background: #fff;
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
            "Product development helps in aligning the company's business strategies with its products, as it involves methods and practices that help reduce risks and uncertainties associated with products being envisioned. We believe in providing high-quality product development services. We follow a highly collaborative approach to develop software products, providing innovative ideas, keeping in pace with customers' expectations, and incorporating new technologies to offer all of the software product development benefits to our clients."
          }
          paragraph2={''}
        />
      </Container>
    </Section>
    <StyledSection2>
      <ServicesSection2 />
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3 />
      </Container>
    </Section>
    <Section>
      <Columns isCentered>
        <ServicesCardProduct />
        <ServicesCardSoftware />
        <ServicesCardTraining />
      </Columns>
    </Section>
    <Section>
      <Container>
        <ServicesSection4 />
      </Container>
    </Section>
    <StyledSection2>
      <StyledContainer>
        <StyledSubTitle>
          <Title2>Customer Success Stories</Title2>
        </StyledSubTitle>
        <SuccessStories />
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
