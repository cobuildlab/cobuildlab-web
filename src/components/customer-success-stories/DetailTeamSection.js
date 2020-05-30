import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TeamList from '../team/TeamList';
import styled from 'styled-components';
import LinkButtonDefault from '../2020/Button/LinkButtonDefault';
import H3 from '../Typography/H3';

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailTeamSection = () => {
  const data = useStaticQuery(query);
  return (
    <Fragment>
      <TitleContainer>
        <H3>Our Team</H3>
      </TitleContainer>
      <TeamList data={data.allTeamJson.nodes} />
      <ButtonContainer>
        <LinkButtonDefault to="/team">See all our team</LinkButtonDefault>
      </ButtonContainer>
    </Fragment>
  );
};

const query = graphql`
  query {
    allTeamJson(limit: 8) {
      nodes {
        name
        id
        description
        social_networks {
          name
          src
        }
        picture {
          childImageSharp {
            fluid {
              srcWebp
              srcSetWebp
              sizes
              base64
              aspectRatio
            }
          }
        }
      }
    }
  }
`;

export default DetailTeamSection;
