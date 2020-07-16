import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Hero, HeroHeader, HeroBody, Section as BloomerSection, Container } from 'bloomer';
import styled from 'styled-components';
import SeoMetaTags from '../components/SeoMetaTags';
import Layout from '../components/2020/Layout';
import Header from '../components/2020/header/Header';
import TeamHero from '../components/team/TeamHero';
import TeamList from '../components/team/TeamList';

const Section = styled(BloomerSection)`
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding: 0em 1em 1em 1em;
  }
`;

const Team = ({ data }) => (
  <Layout>
    <SeoMetaTags title="Cobuild Lab Team" description="Team work" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
      <HeroBody>
        <TeamHero />
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <TeamList data={data.allTeamJson.nodes} />
      </Container>
    </Section>
  </Layout>
);

Team.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    allTeamJson {
      nodes {
        first
        last
        id
        description
        social_networks {
          name
          src
        }
        picture {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default Team;
