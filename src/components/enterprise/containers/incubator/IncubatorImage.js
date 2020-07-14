import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Images = styled(Img)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const IncubatorImage = () => {
  const data = useStaticQuery(query);

  return <Images fluid={data.file.childImageSharp.fluid} atl="" />;
};

const query = graphql`
  query {
    file(relativePath: { eq: "incubator/1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IncubatorImage;
