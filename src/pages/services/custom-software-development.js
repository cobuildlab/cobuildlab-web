import React from 'react';
import { Container, Hero, HeroHeader, Section, Columns } from 'bloomer';
import 'bulma/css/bulma.css';
import '../../assets/scss/index.scss';

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

const CustomSoftwareDevelopment = () => (
  <Layout>
    <SeoMetaTags title="Services" description="Custom Software Development" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
    </Hero>
    <Section>
      <ServicesBannerBackgroundBottom />
      <Container>
        <ServicesHeader
          title={'Custom Software Development'}
          paragraph={
            'Having a team of software and technology specialists (Software Developer, UX UI Designers' +
            ', QA`s, Analysts, Project Managers, Product Owners) available to define the scope' +
            'of a software tool tailored for your company`s processes and' +
            'requirements is the perfect definition of custom software development.' +
            'It’s a process in which we design, develop and maintain a software tool with' +
            'specific functions and solutions for an organization, like yours, for example.'
          }
          paragraph2={
            <>
              <ul>
                <li>• Increase efficiency in your processes.</li>
                <li>• Reduce or eliminate integration costs.</li>
                <li>• It is scalable.</li>
                <li>• No need for licenses or annoying updates.</li>
                <li>• You can hire an external and remote team.</li>
                <li>
                  • You can commercialize the tools in the medium term and turn them into Saas
                  products.
                </li>
                <li>• You are the owner of the tool.</li>
              </ul>
            </>
          }
        />
      </Container>
    </Section>
    <StyledSection2>
      <Container>
        <ServicesSection2
          title={'Develop your custom software tool'}
          text={
            'In that way, you`ll have a tool that responds to your specific processes and needs' +
            'and allows you to decide on issues such as gestures, functionalities, updates (if' +
            'required), changes in the tool (when your processes evolve), and that can' +
            'monetize in the future converting it into a Saas product.'
          }
        />
      </Container>
    </StyledSection2>
    <Section>
      <Container>
        <ServicesSection3
          title={'Benefits: Optimize your processes'}
          textList={[
            'A customized software tool optimizes processes, making them more effective and efficient because every function is designed based on your business activities, so there is no need to modify or adjust anything (as is the case of a commercial tool).',
            'Also is possible to improve and adapt it as your business processes grow or change.',
            'Your competitive advantages over the competition are mainly those: control over the tool and the savings in time, personnel, and resources involved.',
            'Customers perceive that. The result of the same service or the delivery efficiency is better, the quality of the product, etc. All of that without mentioning the tranquility and the perfect coupling of all the team with its software tools.',
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
          title={"“There is no business that a custom software tool can't help.”"}
          leftText={
            'Custom software development is a process applied in any industry, process, and activity. Some of the most common are:'
          }
          rightTextList={[
            'Time and productivity management',
            'Customer relationship',
            'Communications',
            'Transport and delivery',
            'Supply Chain',
            'Logistics',
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

export default CustomSoftwareDevelopment;
