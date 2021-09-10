import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/2020/Layout';
import { Column, Columns, Container, Section } from 'bloomer';
import Contact from '../../components/2020/HomePageContact';
import CareersCard from '../../components/carrers/CareersCard';
import CareersMetaTags from '../../components/carrers/CareersMetaTags';
import CareersHero from '../../components/carrers/CareersHero';
import H6 from '../../components/Typography/H6';

const TagStyle = styled.div`
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #264a60;
  margin-top: 10px;
  margin-bottom: 10px;
  & > span {
    color: #264a60;
    font-weight: 600;
  }
`;

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
        slug
        createdAt
      }
    }
  }
`;

export default Careers;
