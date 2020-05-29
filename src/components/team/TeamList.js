import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Columns, Column } from 'bloomer';
// import styled from 'styled-components';
import TeamCard from './TeamCard';

const TeamList = () => {
  const data = useStaticQuery(query);

  const items = data.allTeamJson.nodes.map(({ id, name, social_networks, picture, descripion }) => (
    <Column key={id} isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <TeamCard
        src={picture.childImageSharp.fluid}
        name={name}
        description={descripion}
        socialNetworks={social_networks}
      />
    </Column>
  ));

  return <Columns isMultiline>{items}</Columns>;
};

const query = graphql`
  query {
    allTeamJson {
      nodes {
        name
        id
        descripion
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

export default TeamList;
