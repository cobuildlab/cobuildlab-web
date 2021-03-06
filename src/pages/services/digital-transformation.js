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

const DigitalTransformation = () => (
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
          title={'Digital Transformation'}
          paragraph={
            'Technology applications are the future of enterprises. \n' +
            'Process automation allows the restructuring of digital processes to improve efficiency, ' +
            'unlatching modern value by innovating existing or new processes and products based on the use ' +
            'of technology.'
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
      <Container>
        <ServicesSection2
          title={'Unbolt unknown values for your customers'}
          text={
            'Cobuild Lab will help you on applying technology for processes to run themselves, making those processes more effective and expanding straightforwardness and reporting abilities. Moreover, unlocking new value features for customers to meet their expectations constantly evolving.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Possibilities of increasing the revenue streams'}
          textList={[
            'One of the most important things to do to increase revenue streams is over-delivering on customer service. With automation, your customers will enjoy a smooth experience when accessing information at-all times.',
            'Forms and workflows will also be automated, avoiding printing, sign, and scan.',
            'Reduce monotonous manual data entry with integrated systems and databases.',
            'Automatically support all mobile devices and accelerate the approval process by giving 24/7 access from anywhere.',
          ]}
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
          title={
            '“Digital Transformation and Process Automation For The Logistics and Supply Chain Industries Benefits”'
          }
          leftText={[
            'Leverage the power of Optimization driven by Machine Learning and Artificial Intelligence.',
            'The solution of a wide range of challenges.',
            'Hyper-connectivity among devices with Internet of Things.',
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

export default DigitalTransformation;
