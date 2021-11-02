import React from 'react';
import { Container, Hero, HeroHeader, Section } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import PropTypes from 'prop-types';
import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';
import ServicesHeader from '../components/services/details/ServicesHeader';
import ServicesSection2 from '../components/services/details/ServicesSection2';
import CareersSection from '../components/carrers/CareersSection';
import styled from 'styled-components';
import CareersVacancyForm from '../components/carrers/CareersVacancyForm';
import BannerBackgroundStories from '../components/customer-success-stories/BannerBackgroundStories';

const ContainerProfileSection = styled.div`
  position: releative;
`;

const StyledSection2 = styled(Section)`
  background: #fff;
  box-shadow: 0px 10px 20px #0000001a;
  position: relative;
  z-index: 99999;
`;

const FormContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding-top: 7rem;
  padding-bottom: 7rem;
  display: flex;
  justify-content: center;
`;

const FormContainerSection = styled.div`
  width: 1000px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
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
  const { title, description, jobProfile, responsibilities, requirements } = career;

  return (
    <Layout>
      <SeoMetaTags title={'Careers: ' + title} description="Careers for the Cobuild Lab" />

      {
        // Header
      }
      <Hero>
        <HeroHeader>
          <Header />
        </HeroHeader>
      </Hero>

      {
        // Hero section
      }
      <Section>
        <Container>
          <ServicesHeader
            title={title}
            paragraph={description}
            img={
              <StaticImage
                src={'../assets/images/sentado_con_laptop.svg'}
                alt={'sit down with laptop'}
              />
            }
            careers={true}
          />
        </Container>
      </Section>

      {
        // Profile
      }
      <ContainerProfileSection>
        <BannerBackgroundStories
          style={{
            width: '90%',
            height: '90%',
            top: '2%',
            left: '-30%',
          }}
        />
        <StyledSection2>
          <Container>
            <ServicesSection2 title={'Profile'} text={jobProfile} careers={true} />
          </Container>
        </StyledSection2>
      </ContainerProfileSection>

      {
        // Duties and responsibilities
      }
      <Section style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <Container>
          <CareersSection title={'Duties and responsabilities'} otherText={responsibilities} />
        </Container>
      </Section>

      {
        // Requirements
      }
      <StyledSection2>
        <Container>
          <ServicesSection2 title={'Requirements'} otherText={requirements} />
        </Container>
      </StyledSection2>

      {
        // Form
      }
      <FormContainer>
        <FormContainerSection>
          <BannerBackgroundStories
            style={{
              width: '100%',
              height: '100%',
              top: '-400%',
              right: '-60%',
            }}
          />
          <CareersVacancyForm />
        </FormContainerSection>
      </FormContainer>
    </Layout>
  );
}

CareersTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default CareersTemplate;
