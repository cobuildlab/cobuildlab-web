import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Redirect = styled(Link)`
  padding: 1.5em 4em;
  background-color: #e76c29;
  display: inline-flex;
  align-items: center;
  border-radius: 999999999999999999999999999px;
  @media screen and (max-width: 768px) {
    padding: 1em 3em;
  }
`;

const ImageContainer = styled.div`
  width: 45px;
  margin-right: 25px;
`;

const Text = styled.span`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  line-height: 1;
  & > strong {
    font-weight: lighter;
    text-transform: capitalize;
  }
`;

const IncubatorButton = () => {
  const data = useStaticQuery(query);

  return (
    <Container>
      <Redirect to="/2020">
        <ImageContainer>
          <Img fluid={data.file.childImageSharp.fluid} atl="" />
        </ImageContainer>
        <Text>
          Start Up
          <strong>Services</strong>
        </Text>
      </Redirect>
    </Container>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "icons/nut-icon.png" }) {
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
