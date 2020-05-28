import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import styled from 'styled-components';

const OurTeamMapImage = () => {
  const data = useStaticQuery(query);

  return <img src={data.file.publicURL} alt="" />;
};

const query = graphql`
  query {
    file(relativePath: { eq: "team/map.svg" }) {
      publicURL
    }
  }
`;

export default OurTeamMapImage;
