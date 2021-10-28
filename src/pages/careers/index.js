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

const TeamTitle = styled.h5`
  margin-bottom: 10px;
  font-size: 1.8rem;
  font-weight: 500;
`;

const LastPositionsContainer = styled.div``;

const LastPositionsTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const GroupFilterButtons = () => {
  const options = ['Developers', 'Sales', 'Marketing'];

  return (
    <>
      {options.map((option, index) => (
        <button key={index} className={'button'}>
          {option}
        </button>
      ))}
    </>
  );
};

const AsideOptions = () => {
  const options = ['React Dev Junior', 'Sales Manager', 'Project Manager', 'Swift Dev Senior'];
  return (
    <>
      <LastPositionsContainer>
        <LastPositionsTitle>Last positions</LastPositionsTitle>
        <ul>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </LastPositionsContainer>
    </>
  );
};

const Careers = ({ data }) => {
  const { careers } = data['allCareersList8Base'];

  const items = careers.map((node, i) => {
    return (
      <>
        <Column isSize={{ desktop: 4, tablet: 4, mobile: 12 }} key={i}>
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
        <Columns isMultiline>
          <Column isSize={{ desktop: 2 }} isPaddingless>
            <aside>
              <TeamTitle>Teams</TeamTitle>
              <GroupFilterButtons />
              <AsideOptions />
            </aside>
          </Column>
          <Column isSize={{ desktop: 10 }} style={{ padding: '0', paddingLeft: '2rem' }}>
            <p>Whatever path you take, you are choosing a career in a truly innovative company.</p>
            <p>
              We pride ourselves on offering a competitive salary and benefits wherever you work in
              our global company. {"You'll"} experience a fast-paced collaborative environment where
              you can truly shape your future with like-minded colleagues.
            </p>
            <p>
              Check our job vacancies and if you think you can be part of our dream team, Apply!
            </p>
            <div>
              <H5 style={{ marginBottom: '1rem' }}>
                <TextIndigo style={{ fontFamily: "'Lato-light'!important" }}>Careers</TextIndigo>
              </H5>
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
