import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Column, Card } from 'bloomer';
import Img from 'gatsby-image';
import H4 from '../../../Typography/H4';

import styled from 'styled-components';

const Title = styled(H4)`
  text-align: left;
  font-weight: 100;
  font-family: 'Lato-Light' !important;
  margin-top: -100px;
  padding-left: 35px;
  padding-right: 39px;
`;

const CardStyled = styled(Card)`
  box-shadow: 0px 10px 20px #0000001a;
  background: rgba(255, 255, 255, 0.5);
  @media screen and (min-width: 1480px) {
    max-width: 536px;
    max-height: 479px;
  }
`;

const Paragraph = styled.p`
  font-size: 17px;
  font-family: 'Lato-regular' !important;
  text-align: left;
  padding-left: 35px;
  color: #264a60;
  padding-right: 39px;
  padding-bottom: 23px;
  margin-top: 5px;
`;

const StyledDiv = styled.div`
  height: 100px;
  background: linear-gradient(900deg, rgba(255, 255, 255, 0.1) 1%, rgba(255, 250, 251, 1) 90%);
  position: relative;
  top: -100px;
`;

const ServicesCardSoftware = () => {
  const data = useStaticQuery(query);
  return (
    <>
      <Column isSize={{ mobile: 12, desktop: 4 }}>
        <CardStyled>
          <>
            <Img fluid={data.file.childImageSharp.fluid} alt="" />
            <StyledDiv />
          </>
          <>
            <Title>Lorem Ipsum</Title>
          </>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, sapien at
            molestie{' '}
          </Paragraph>
        </CardStyled>
      </Column>
    </>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "service/details/work.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default ServicesCardSoftware;
