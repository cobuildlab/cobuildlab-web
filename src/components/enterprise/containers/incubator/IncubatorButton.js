import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Redirect = styled(Link)`
  position: absolute;
  left: 0;
  bottom: 15px;
  width: 90%;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

const IncubatorButton = () => {
  const data = useStaticQuery(query);

  return (
    <Redirect to="/2020">
      <Img fluid={data.file.childImageSharp.fluid} atl="" />
    </Redirect>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "incubator/2.png" }) {
      childImageSharp {
        fluid {
          base64
          sizes
          aspectRatio
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`;

export default IncubatorButton;
