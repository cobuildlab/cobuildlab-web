import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Images = styled.img`
  min-width: 700px;
  min-height: 500px;
`;

const OurTeamMapImage = () => {
  const data = useStaticQuery(query);

  return <Images src={data.file.publicURL} alt="" />;
};

const query = graphql`
  query {
    file(relativePath: { eq: "team/map.svg" }) {
      publicURL
    }
  }
`;

export default OurTeamMapImage;
