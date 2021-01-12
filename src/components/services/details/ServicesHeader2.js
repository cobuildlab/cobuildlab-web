import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Column, Columns } from 'bloomer';
import Img from 'gatsby-image';
import ServicesSubTitle from './../ServicesSubTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';
import { TextOrange } from '../../Typography/TextHelpers';

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: justify;
  color: #264a60;
`;

const StyleSubtitle = styled.div`
  text-align: center;
`;

const ServicesHeader2 = () => {
  const data = useStaticQuery(query);
  return (
    <>
      <StyleSubtitle>
        <ServicesSubTitle isCentered>
          StartUp &nbsp;
          <TextOrange>your Idea</TextOrange>{' '}
        </ServicesSubTitle>
      </StyleSubtitle>
      <Columns>
        <Column isHidden="mobile" isSize={3} isOffset={{ desktop: 2 }}>
          <Img fluid={data.file.childImageSharp.fluid} alt="" />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <ServicesContent>
            <Paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Paragraph>
          </ServicesContent>
        </Column>
      </Columns>
    </>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "service/details/services-details.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default ServicesHeader2;
