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

import LeadVolt from '../../components/services/details/customer-success-stories/card/LeadVolt';
import Avsee from '../../components/services/details/customer-success-stories/card/Avsee';
import Okroo from '../../components/services/details/customer-success-stories/card/Okroo';

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
          title={'Website Development'}
          paragraph={
            'Aligning a brand, your ideas, and our knowledge will give life to a website that caters to your service and operations. With a professional website, you can increase your revenue flows, and establish business credibility and thrusters with brand consistency.'
          }
          paragraph2={
            'Web design includes many processes regarding the production and maintenance of a\n' +
            '                website. Encompassing web graphic design, user interface design, user experience\n' +
            '                design, and search engine optimization.'
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/iconos-web-design_Main-Services-Web-Design_Main Services-Web-Design.svg'
              }
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Increase your company’s '}
          titleOrange={<>awareness of Web Design.</>}
          text={
            <>
              Our web design will be flexible and adaptable to your business’ requirements, with the
              right design, content distribution, and UX.
              <br />
              <br />
              Web designing is all about achieving goals by influencing the behavior of your
              visitors and structuring every element of it around the main goal of the website.
            </>
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={
            'Improve the conversions of your web. With Web Design, your business will attract more potential clients'
          }
          otherText={
            'For whom is a web created? This is the portal that your business will use to directly contact your potential customers. Impress your target with our Web Design service.'
          }
          otherText2={
            'Well-structured web design strengthens your competitive advantages by providing value to the users, with a visually appealing website, a fast load time, and more.'
          }>
          <StaticImage src={'./../../assets/images/service/web-design-Ilustration-01.svg'} />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Benefits and Advantages of Web Design'}
          text={
            'More competitive advantage. Added value to the main target and strategies applied to your business:'
          }
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
        <Columns isCentered>
          <LeadVolt />
          <Avsee />
          <Okroo />
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

export default WebDesign;
