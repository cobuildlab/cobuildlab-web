import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/2020/Layout';
import { Column, Columns, Container, Section } from 'bloomer';
import Contact from '../../components/2020/HomePageContact';
import CareersCard from '../../components/carrers/CareersCard';
import CareersHero from '../../components/carrers/CareersHero';
import CareersMetaTags from '../../components/carrers/CareersMetaTags';

const Careers = ({ data }) => {
  const { careers } = data.allCareers8Base;

  const items = careers.map((node, i) => {
    return (
      <Column isSize={{ desktop: 4, tablet: 6, mobile: 12 }} key={i}>
        <CareersCard
          to={i + 1}
          src={''}
          title={node.title}
          description={node.description}
          readingTime={'3 min'}
          createdAt={node.createdAt}
          tag={[]}
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
    allCareers8Base(
      limit: 1000
      sort: { fields: createdAt, order: DESC }
      filter: { active: { eq: "true" } }
    ) {
      careers: nodes {
        id
        title
        description
        createdAt
      }
    }
  }
`;

export default Careers;
