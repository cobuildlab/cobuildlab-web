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
          title={'IT Staff Augmentation'}
          paragraph={
            'Staff Augmentation is an outsourcing strategy that allows your organization to recruit technical talent from around the world, choosing the candidates that best fit its requirements and placing them on their own teams when they are needed to perform specific functions on a temporary basis, thus allowing companies to meet their set goals.\n'
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos_Staff-Augmentation.svg'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Complement your existing '}
          titleOrange={'team with top-notch technological resources'}
          text={
            "Recruit skilled technicians to perform a variety of tasks such as programming apps or hybrid applications, occupying a very specific position, or filling the gap left by a member who is on leave and improving your company's capabilities."
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={"It's an excellent way to save resources!"}
          textList={[
            'Access to distinct skill sets.',
            'Cost-savings.',
            'Focused and unbiased workforce.',
          ]}
          textList2={['Flexibility.', 'Attain assistance with Zero administrative complications.']}>
          <StaticImage src={'./../../assets/images/service/services-details3.png'} />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={"Here's a play by play of our Staff Augmentation process"}
          text={
            "In Cobuild Lab we’ve been helping business owners, CEO's, COO’s and IT leaders get past the techno-speak and help them take a business process and turn it into a custom software solution, whether they need design and build services, technical assistance, or are looking to augment their existing team with experienced agile developers. This is our process:"
          }
          leftText={[
            'We put together a well-managed team with the best software engineers and user experience specialists for full-time dedication to the assigned project.',
            "We designate the right people with the most suitable skills to meet the project's needs, saving the client the effort of having to carry out a costly search, training, and management of new staff since we do all of this ourselves.",
          ]}
          rightTextList={[
            "Our team integrates to the company that won't have to manage it as we include a Project Manager that follows up the process, paying special attention to the delivery times and the regular accomplishment of the assignments.",
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

export default AppDevelopment;
