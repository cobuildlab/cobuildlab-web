import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Column, Columns } from 'bloomer';
import Img from 'gatsby-image';
import ServiceTitle from './ServicesTitle';
import ServicesSubTitle from './ServicesSubTitle';
import ServicesContent from './ServicesContent';
import { TextOrange } from '../Typography/TextHelpers';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: justify;
  color: #264a60;
`;

const ServicesHeader = () => {
  const data = useStaticQuery(query);
  return (
    <Columns>
      <Column isSize={{ mobile: 12, desktop: 6 }}>
        <ServicesContent>
          <ServicesSubTitle>You have a great idea, but how start?</ServicesSubTitle>
          <ServiceTitle>
            Our <TextOrange>Services</TextOrange>
          </ServiceTitle>
          <Paragraph>
            We partner with new and early-stage entrepreneurs and industry experts to transforms
            ideas into Web and Mobile Software Products.
            <br />
            <br />
            Since day one, our technique is focused on early results and transparent communication.
          </Paragraph>
        </ServicesContent>
      </Column>
      <Column isHidden="mobile" isSize={6}>
        <Img fluid={data.file.childImageSharp.fluid} alt="" />
      </Column>
    </Columns>
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

export default ServicesHeader;
