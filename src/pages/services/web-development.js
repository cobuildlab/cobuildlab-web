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

import Propagad from '../../components/services/details/customer-success-stories/card/Propagad';
import MyVoice from '../../components/services/details/customer-success-stories/card/MyVoice';
import JobCore from '../../components/services/details/customer-success-stories/card/JobCore';

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

const Paragraph2 = styled.p`
  font-size: 17px;
  text-align: justify;
  color: #264a60;
`;

const WebDevelopment = () => (
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
          title={'Web Development'}
          paragraph={
            'We align our knowledge with your brand and ideas to construct websites that cater to your services and operations in order to engage and impress potential customers. Establish business credibility, brand consistency, and create more revenue with a superb web presence.'
          }
          paragraph2={
            <>
              <>Impact your audience now, Impress your target, More business credibility here.</>
              <br />
              <Paragraph2>
                Web design includes many processes regarding the production and maintenance of a
                website. Encompassing web graphic design, user interface design, user experience
                design, and search engine optimization.
              </Paragraph2>
            </>
          }
          img={
            <StaticImage
              src={'./../../assets/images/service/card/iconos-Main-Services-Web-Development.svg'}
              alt=""
            />
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Anything from a simple,'}
          titleOrange={
            <>
              single-page <br />
              presence to a massive, multi-page website
            </>
          }
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
          title={'Let’s impact your audience'}
          otherText={
            'For whom is a web created? This is the portal that your business will use to directly contact your potential customers. Impress your target with our Web Design service.'
          }
          otherText2={
            'Well-structured web design strengthens your competitive advantages by providing value to the users, with a visually appealing website, a fast load time, and more.'
          }
          textList={[
            'Increase your company’s awareness of Web Design.',
            'Improve the conversions of your web. With Web Design, your business will attract more potential clients.\n',
            'More competitive advantage. Added value to the main target and strategies applied to your business.',
          ]}
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'Benefits and advantages of Web Development for your business'}
          leftText={[
            'Improved online presence.',
            'Customer relationship builder.',
            'Application capacity to grow with your business.',
          ]}
          rightTextList={[
            'More Social Sharing.',
            'New software and upgrades implemented easily.',
            'Innovation and digital undertake.',
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
          <MyVoice />
          <JobCore />
          <Propagad />
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

export default WebDevelopment;
