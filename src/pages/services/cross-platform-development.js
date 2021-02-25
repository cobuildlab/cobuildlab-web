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

const CrossPlatformDevelopment = () => (
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
          title={'Cross-Platform Development'}
          paragraph={
            'Cross-platform development provides the flexibility to build your app using a universal language which can then be exported to various Smartphone platforms. This allows one “app” to work across multiple platforms, like IOS and Android.'
          }
          paragraph2={
            <>
              <ul>
                <li>• Request a Call.</li>
                <li>• Contact us now.</li>
                <li>• Get a FREE Consultation.</li>
              </ul>
            </>
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Get faster'}
          titleOrange={'into the Market'}
          text={
            'It is ideal for prototyping because it allows a faster time to market on more than one platform and allows the owner to collect user feedback, establish a position in the market and establish a position with consumers before any other competitor.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'You’ll Only Need One Development Team, Us!'}
          otherText={
            'We are a single Development team, who has hands-on experience working with a set of technologies. Having us as a unique team handling all the stages of the project, you avoid a scenario where too many work teams risk sabotaging one another and compromise the app project itself.\n'
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <Columns isCentered>
          <ServicesCardProduct />
          <ServicesCardSoftware />
          <ServicesCardTraining />
        </Columns>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Why a Cross-Platform App?'}
          leftText={[
            'Launching the software simultaneously on various platforms.',
            'Time to market is reduced since developing one program takes a lot less time than building two or three apps for each device platform.',
            'Uniformity increases between different operating systems creating a more seamless user experience',
          ]}
          rightTextList={[
            'Faster and easier updates.',
            'Since cross-platform applications are Internet-based, Users don’t have to download separate updates.',
          ]}
        />
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

export default CrossPlatformDevelopment;
