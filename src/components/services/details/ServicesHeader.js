import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Column, Columns } from 'bloomer';
import Img from 'gatsby-image';
import ServiceTitle from './../ServicesTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 17px;
  font-weight: 600;
  text-align: justify;
  color: #264a60;
`;

const Paragraph2 = styled.p`
  font-size: 17px;
  text-align: justify;
  color: #264a60;
`;

const ServicesHeader = () => {
  const data = useStaticQuery(query);
  return (
    <Columns>
      <Column isSize={{ mobile: 12, desktop: 7 }}>
        <ServicesContent>
          <ServiceTitle>Cobuild: Product Development</ServiceTitle>
          <Paragraph>
            Cobuild Is the process of transforming an idea in a sustainable business, through the
            combination and collaboration of the areas of Lean Entrepreneurship, Business Strategy,
            Technological Innovation, and Exponential Growth.
            <br />
            <br />
          </Paragraph>
          <Paragraph2>
            In this process, we evaluate your idea and help you shape it into a Value Proposition,
            and test it if necessary. After that, we design together the first version of your
            product with the purpose of Market Validation, or Product Market Fit to test if we
            satisfy the need that we intend to satisfy and to acquire our first Customers. From this
            point and forward we focus on improving the experience, acquire customer and growth.
          </Paragraph2>
        </ServicesContent>
      </Column>
      <Column isHidden="mobile" isSize={5}>
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
