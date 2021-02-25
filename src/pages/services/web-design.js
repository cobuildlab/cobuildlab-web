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

const WebDesign = () => (
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
          title={'Web Design'}
          paragraph={
            'Aligning a brand, your ideas, and our knowledge will give life to a website that caters to your service and operations. With a professional website, you can increase your revenue flows, and establish business credibility and thrusters with brand consistency.\n'
          }
          paragraph2={
            <>
              <Paragraph>
                Web design includes many processes regarding the production and maintenance of a
                website. Encompassing web graphic design, user interface design, user experience
                design, and search engine optimization.
              </Paragraph>
              <br />
              <ul>
                <li>• Impact your audience now.</li>
                <li>• Impress your target.</li>
                <li>• More business credibility here</li>
              </ul>
            </>
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Anything from a simple, '}
          titleOrange={'single-page presence to a massive, multi-page website.'}
          text={
            'Our web design will be flexible and adaptable to your business’ requirements, with the right design, content distribution, and UX.'
          }
          otherText={
            'Web designing is all about achieving goals by influencing the behavior of your visitors and structuring every element of it around the main goal of the website.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Let’s impact your audience'}
          otherText={
            'For whom is a web created? This is the portal that your business will use to directly contact your potential customers. Impress your target with our Web Design service.'
          }
          otherText2={
            'Well-structured web design strengthens your competitive advantages by providing value to the users, with a visually appealing website, a fast load time, and more.'
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
          title={'Benefits and Advantages of Web Design'}
          leftText={['Improved website loading times', 'Lower bounce rates']}
          rightTextList={['Higher conversion rates', 'More Social Sharing']}
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

export default WebDesign;
