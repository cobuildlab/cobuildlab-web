import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Column, Columns, Container } from 'bloomer';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';
import { TextIndigo } from '../../components/2021/text/TextHelpers';
import H5 from '../../components/Typography/H5';
import styled from 'styled-components';
import Layout from '../../components/2020/Layout';
import CareersCard from '../../components/carrers/CareersCard';
import CareersHero from '../../components/carrers/CareersHero';
import './style.scss';
import CustomBannerBackground from '../../components/2020/CustomBannerBackground';

const TeamTitle = styled.h5`
  margin-bottom: 5px;
  font-size: 1.5rem;
`;

const CareersTitle = styled(H5)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const AsideContainer = styled.aside`
  padding: 0rem 2.25rem 1.5rem 2.25rem;
`;

const LastPositionsContainer = styled.div``;

const LastPositionsTitle = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const PositionContainer = styled.li`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const GroupFilterButtons = () => {
  const options = ['Developers', 'Sales', 'Marketing'];

  return options.map((option, index) => (
    <button key={index} className={'button'}>
      {option}
    </button>
  ));
};

const AsideOptions = () => {
  const options = ['React Dev Junior', 'Sales Manager', 'Project Manager', 'Swift Dev Senior'];

  return (
    <LastPositionsContainer>
      <LastPositionsTitle className={'font-semi-bold'}>Last positions</LastPositionsTitle>
      <ul className={'text-indigo'}>
        {options.map((option, index) => (
          <PositionContainer key={index}>{option}</PositionContainer>
        ))}
      </ul>
    </LastPositionsContainer>
  );
};

const Careers = ({ data }) => {
  const { careers } = data['allCareersList8Base'];

  const items = careers.map((node, i) => {
    return (
      <>
        <Column isSize={{ desktop: 4, tablet: 6, mobile: 12 }} key={i}>
          <CareersCard
            to={node.slug}
            title={node.title}
            time={node.time}
            readingTime={'3 min'}
            modality={node.modality}
            createdAt={node.createdAt}
          />
        </Column>
      </>
    );
  });

  return (
    <Layout>
      <SeoMetaTags
        title="Careers in Tech with Cobuild Lab"
        description="Careers in Tech with Cobuild Lab"
      />
      <CareersHero />
      <Container>
        <CustomBannerBackground
          style={{
            width: '100%',
            height: '100%',
            top: '-10%',
            left: '-30%',
          }}
        />
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, tablet: 4, desktop: 2 }} isPaddingless>
            <AsideContainer>
              <TeamTitle className={'text-indigo font-bold'}>Teams</TeamTitle>
              <GroupFilterButtons />
              <AsideOptions />
            </AsideContainer>
          </Column>
          <Column isSize={{ mobile: 12, tablet: 8, desktop: 10 }} isPaddingless>
            <p className={'font-semi-bold'}>
              Whatever path you take, you are choosing a career in a truly innovative company.
            </p>
            <p className={'font-semi-bold'}>
              We pride ourselves on offering a competitive salary and benefits wherever you work in
              our global company. {"You'll"} experience a fast-paced collaborative environment where
              you can truly shape your future with like-minded colleagues.
            </p>
            <p className={'font-semi-bold'}>
              Check our job vacancies and if you think you can be part of our dream team, Apply!
            </p>
            <div>
              <CareersTitle style={{ marginBottom: '1rem' }}>
                <TextIndigo className={'font-light'}>Careers</TextIndigo>
              </CareersTitle>
              <Columns isMultiline>{items}</Columns>
            </div>
          </Column>
        </Columns>
      </Container>
      {/* <Section>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <br />
          <br />
          <Columns isMultiline>
            <Column isSize={{ desktop: 2, tablet: 2 }} isHidden={'mobile'}>
              <H6>Teams</H6>
              <div>
                <TagStyle>
                  <span>Developers</span>
                </TagStyle>
                <TagStyle>
                  <span>Sales</span>
                </TagStyle>
                <TagStyle>
                  <span>Marketing</span>
                </TagStyle>
              </div>
            </Column>
            <Column isSize={{ desktop: 10, tablet: 10, mobile: 12 }}>
              <Columns isMultiline>{items}</Columns>
            </Column>
          </Columns>
        </Container>
      </Section>
      <Section>
        <Container>
          <Contact />
        </Container>
      </Section> */}
    </Layout>
  );
};

Careers.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query BaseCareer {
    allCareersList8Base(
      limit: 1000
      sort: { fields: createdAt, order: DESC }
      filter: { active: { eq: "true" } }
    ) {
      careers: nodes {
        id
        title
        description
        modality
        time
        slug
        createdAt
      }
    }
  }
`;

export default Careers;
