import React from 'react';
import { Container, Hero, HeroHeader, Section } from 'bloomer';
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

const ProcessAutomation = () => (
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
          title={'Process Automation'}
          paragraph={
            'With process automation software, you’re able to achieve new levels of productivity and reduce the costs and errors associated with manual tasks. Introducing efficiency to workflows across your business is the key to maximizing valuable employee time, particularly in areas where resources have more projects to complete than hours in the day.'
          }
          paragraph2={
            <>
              <ul>
                <li>• Transform my enterprise.</li>
                <li>• Automate my enterprise.</li>
                <li>• Solve challenges.</li>
                <li>• Tackle challenges.</li>
                <li>• Optimize and automate now!.</li>
              </ul>
            </>
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <ServicesSection2
        title={'Unbolt unknown'}
        titleOrange={' values for your customers'}
        text={
          'Cobuild Lab will help you on applying technology for processes to run themselves, making those processes more effective and expanding straightforwardness and reporting abilities. Moreover, unlocking new value features for customers to meet their expectations constantly evolving.'
        }
      />
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Possibilities of increasing the revenue streams'}
          otherText={
            'One of the most important things to do to increase revenue streams is over-delivering on customer service. With automation, your customers will enjoy a smooth experience when accessing information at-all times.\n' +
            '        Forms and workflows will also be automated, avoiding printing, sign, and scan.'
          }
          otherText2={
            'Reduce monotonous manual data entry with integrated systems and databases.\n' +
            '       Automatically support all mobile devices and accelerate the approval process by giving 24/7 access from anywhere.'
          }
        />
      </Container>
    </Section>
    <Section>
      <Container>
        <ServicesSection4
          title={
            'Digital Transformation and Process Automation For The Logistics and Supply Chain Industries Benefits'
          }
          leftText={[
            'Leverage the power of Optimization driven by Machine Learning and Artificial Intelligence.',
            'The solution of a wide range of challenges\n.',
            'Hyper-connectivity among devices with Internet of Things\n.',
          ]}
          rightTextList={[
            'Maximum visibility across factors to improve decision-making.',
            'The satisfaction of the critical needs of the industry, such as optimization, visibility, connectivity, efficiency, and automation.',
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

export default ProcessAutomation;
