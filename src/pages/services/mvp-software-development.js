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
import Payklever from '../../components/services/details/customer-success-stories/card/Payklever';
import LeadVolt from '../../components/services/details/customer-success-stories/card/LeadVolt';

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

const MvpSoftwareDevelopment = () => (
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
          title={'MVP Software Development'}
          paragraph={
            'Minimum Viable Product (MVP) can be described as a midpoint between the earlier stages of the development process and the final product. An MVP is the best way to start any project because it allows for agile development cycles. It means finding the right balance between minimal design, and maximum value.'
          }
          paragraph2={
            'By getting an MVP, you can collect feedback from the initial customers having a\n' +
            "                better understanding of the user's expectations. With that information, we can\n" +
            '                build better features that meet their needs and it helps avoid failure and\n' +
            '                substantial capital loss.'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-MVP-Software-Development.png'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Show what \n'}
          titleOrange={'you got!'}
          text={
            <>
              An MVP allows you to have what you need to get to market faster. That is the very
              beginning of your incredible company journey to validate an idea for a product without
              building the entire product.
              <br />
              <br />
              MVP can also help minimize the time and resources you might otherwise commit to
              building a product that will not succeed.
            </>
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Start from Minimal to Success'}
          textList={[
            'Potential client database.',
            'Check whether the project is appealing to potential users.',
            'Attract investors earlier.',
            'Save time and money on product development.',
          ]}
          textList2={[
            'Avoid expensive market research.',
            'Open testing opportunity.',
            "Gather user's feedback.",
            'Keep things budget-friendly.\n',
          ]}>
          <StaticImage src={'./../../assets/images/service/services-details3.png'} />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'With MVP Software Development you…'}
          leftText={[
            'Acquire a potential client base and find the early adopters.',
            'Check whether the project is appealing to potential users.',
            'Attract investors earlier.',
          ]}
          rightTextList={[
            'Save time and money on product development by avoiding expensive market research.',
            'Open an early testing opportunity.',
            'Gather user intelligence and feedback.',
            'Keep things budget-friendly.',
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
          <Payklever />
          <LeadVolt />
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

export default MvpSoftwareDevelopment;
