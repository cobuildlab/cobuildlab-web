import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Column, Card } from 'bloomer';
import Img from 'gatsby-image';
import H4 from '../../Typography/H4';

import styled from 'styled-components';

const Title = styled(H4)`
  text-align: right;
  font-weight: 100;
  font-family: 'Lato-Light' !important;
`;

const CardStyled = styled(Card)`
  max-height: 480px;
  min-height: 520px;
  box-shadow: 0px 10px 20px #0000001a;
  background: rgba(255, 255, 255, 0.5);
`;

const Image = styled(Img)`
  width: 273px !important;
  height: 247px !important;
  top: 12px;
  left: 12px;
`;

const Container = styled.div`
  margin-top: -22px;
  padding-right: 36px;
`;

const Paragraph = styled.p`
  font-size: 17px;
  font-family: 'Lato-bold' !important;
  text-align: left;
  padding-left: 10px;
  color: #264a60;
  padding-right: 10px;
  margin-top: 5px;
`;

const Readmore = styled.p`
  font-size: 17px;
  font-family: 'Lato-bold' !important;
  text-align: left;
  padding-left: 10px;
  color: #e76c29;
  padding-right: 10px;
  bottom: 18px;
  position: absolute;
  right: 18px;
`;

const ServicesCardProduct = () => {
  const data = useStaticQuery(query);
  return (
    <>
      <Column isSize={{ mobile: 12, desktop: 5 }}>
        <CardStyled>
          <>
            <Image fluid={data.file.childImageSharp.fluid} alt="" />
          </>
          <Container>
            <Title>
              Cobuild: Product <br />
              Development
            </Title>
          </Container>
          <Paragraph>
            Cobuild Is the process of transforming an idea in a sustainable business, through the
            combination and collaboration of the areas of Lean Entrepreneurship, Business Strategy,
            Technological Innovation, and Exponential Growth.{' '}
          </Paragraph>
          <Readmore>Read More</Readmore>
        </CardStyled>
      </Column>
    </>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "service/product-development-new.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default ServicesCardProduct;
