import React from 'react';
import { Container, Hero, HeroHeader, Section, Columns, Title } from 'bloomer';
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

const Paragraph = styled(Title)`
  font-size: 17px;
  font-weight: 500;
  text-align: justify;
  color: #264a60;
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
            <>
              <Paragraph>
                By getting an MVP, you can collect feedback from the initial customers having a
                better understanding of the user&apos;s expectations. With that information, we can
                build better features that meet their needs and it helps avoid failure and
                substantial capital loss.
              </Paragraph>
              <br />
              <ul>
                <li>• I want my MVP Now!.</li>
                <li>• Contact Us!.</li>
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
          title={'Show what \n'}
          titleOrange={'you got!'}
          text={
            'An MVP allows you to have what you need to get to market faster. That is the very beginning of your incredible company journey to validate an idea for a product without building the entire product.'
          }
          otherText={
            'MVP can also help minimize the time and resources you might otherwise commit to building a product that will not succeed.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Start from Minimal to Success\n'}
          otherText={
            'Starting MVP development is, initially, adding the essential functions for the project. Additional required functionality can present itself during the testing process and from user feedback.'
          }
          otherText2={
            'With those new changes/functionality, you can make sure that the product will match what users want or expect.'
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
          title={'With using s MVP, you…'}
          leftText={[
            'Acquire a potential client base and find the early adopters.\n',
            'Check whether the project is appealing to potential users.',
            'Attract investors earlier.',
            'Save time and money on product development by avoiding expensive market research.',
          ]}
          rightTextList={[
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

export default MvpSoftwareDevelopment;
