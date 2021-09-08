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

import Title2 from '../../components/Title2';
import ServicesSection2 from '../../components/services/details/ServicesSection2';
import { StaticImage } from 'gatsby-plugin-image';

import Avsee from '../../components/services/details/customer-success-stories/card/Avsee';
import Pitazo from '../../components/services/details/customer-success-stories/card/Pitazo';
import Weedmatch from '../../components/services/details/customer-success-stories/card/Weedmatch';
import ServicesSection4 from '../../components/services/details/ServicesSection4';

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
          title={'Enterprise Resource Planning System'}
          paragraph={
            'When you need to plan and manage all the resources and specific activities of your business in the same system, an Enterprise Resource Planning system (ERP) is the tool to develop.'
          }
          img={
            <StaticImage
              src={
                './../../assets/images/service/card/icon-enterprise-resource-planning-system-02.svg'
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
          title={'Get an Enterprise '}
          titleOrange={'Resource Planning System'}
          text={
            "You'll achieve perfect coordination between production, finances, communications, supplies, and the distribution of economic and human resources. With ERP software, each department and you can access all systems through one application with a single interface."
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'The benefits that an ERP offers you:'}
          textList={[
            'It simplifies activity planning and resource allocation.',
            'Get a better integration of activities, such as accounts payable, inventory control systems, order tracking, and customer databases into a single system.',
          ]}
          textList2={[
            'Support internal communication (horizontal and vertical).',
            'Reduce the number of tools used and incompatibility problems.',
            'Facilitate access to information and process management.',
          ]}>
          <StaticImage
            src={
              './../../assets/images/service/ilustracion-enterprise-resource-planning-system-01.svg'
            }
          />
        </ServicesSection3>
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={'What are the benefits of a custom transportation management system?'}
          leftText={[
            "Technology will be by your side when making routing decisions regarding quotes, transit time, and carrier's selection.",
            'Real-time routes monitoring and truck tracking.',
            'It makes it easy to assign the correct carrier for the merchandise and information based on previous deliveries.',
          ]}
          rightTextList={[
            'Generate detailed information with custom reports is perfect for analyzing things and determining discrepancies.',
            'Growth of your business and improvement of tracking, monitoring, and routing operations.',
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
          <Avsee />
          <Pitazo />
          <Weedmatch />
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
