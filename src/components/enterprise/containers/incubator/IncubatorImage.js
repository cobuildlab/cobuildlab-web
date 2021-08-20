import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  overflow: hidden;
`;

const Images = styled(GatsbyImage)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const IncubatorImage = () => {
  const data = useStaticQuery(query);

  return (
    <Container>
      <Images image={getImage(data.file.childImageSharp.gatsbyImageData)} alt={''} />
    </Container>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "incubator/1.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default IncubatorImage;
