import React from 'react';
import { Container, Hero, HeroHeader, Section } from 'bloomer';

import PropTypes from 'prop-types';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/2020/Layout';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import Header from '../components/header/Header';
import ServicesBannerBackgroundBottom from '../components/services/ServicesBannerBackgroundBottom';
import ServicesHeader from '../components/services/details/ServicesHeader';
import ServicesSection2 from '../components/services/details/ServicesSection2';
import CareersSection from '../components/carrers/CareersSection';
import CareersSection2 from '../components/carrers/CareersSection2';
import Contact from './../components/2020/HomePageContact';

import styled from 'styled-components';

const StyledSection2 = styled(Section)`
  background: #fff;
  box-shadow: 0px 10px 20px #0000001a;
`;

/**.
 * The Carrer Ai component
 *
 * @param {Object} pageContext - The context.
 * @param {Object} pageContext.pageContext - The context.
 * @returns {JSX.Element} - the resulting react component
 * @constructor
 */
function CareersTemplate({ pageContext }) {
  const { career } = pageContext;
  const { title, description, jobProfile, jobDescription } = career;

  return (
    <Layout>
      <SeoMetaTags title="Careers" description="Privacy Policy for the Cobuild Lab" />
      <Hero>
        <HeroHeader>
          <Header />
        </HeroHeader>
      </Hero>
      <Section>
        <ServicesBannerBackgroundBottom />
        <Container>
          <ServicesHeader
            title={title}
            paragraph={description}
            img={<StaticImage src={'./../resources/2020/home/coubuild-v.svg'} alt="" />}
            careers={true}
          />
        </Container>
      </Section>
      <StyledSection2>
        <Container>
          <ServicesSection2 title={'Job description'} text={jobDescription} careers={true} />
        </Container>
      </StyledSection2>
      <Section>
        <Container>
          <CareersSection title={'Why work at Cobuild Lab?'} otherText={jobProfile} />
        </Container>
      </Section>
      <Section>
        <Container>
          <CareersSection2 />
        </Container>
      </Section>
      <Section>
        <Container>
          <Contact />
        </Container>
      </Section>
    </Layout>
  );
}

CareersTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default CareersTemplate;
