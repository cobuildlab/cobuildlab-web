import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/2020/Layout';
import { Column, Columns, Container, Section } from 'bloomer';
import Contact from '../../components/2020/HomePageContact';
import CareersCard from '../../components/carrers/CareersCard';
import CareersMetaTags from '../../components/carrers/CareersMetaTags';
import CareersHero from '../../components/carrers/CareersHero';

const Careers = ({ data }) => {
  const { careers } = data['allCareersList8Base'];

  const items = careers.map((node, i) => {
    return (
      <Column isSize={{ desktop: 4, tablet: 6, mobile: 12 }} key={i}>
        <CareersCard
          to={i + 1}
          title={node.title}
          readingTime={'3 min'}
          createdAt={node.createdAt}
        />
      </Column>
    );
  });

  return (
    <Layout>
      <CareersMetaTags />
      <CareersHero />
      <Section>
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
          <h2>Careers</h2>
          <Columns isMultiline>{items}</Columns>
        </Container>
      </Section>
      <Section>
        <Container>
          <Contact />
        </Container>
      </Section>
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
        createdAt
      }
    }
  }
`;

export default Careers;
