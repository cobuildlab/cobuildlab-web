import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Column, Columns } from 'bloomer';
import Img from 'gatsby-image';
import ServiceTitle from './ServicesTitle';
import ServicesSubTitle from './ServicesSubTitle';
import ServicesContent from './ServicesContent';
import Paragraph from '../Typography/Paragraph';

const ServicesProductDevelopment = () => {
  const data = useStaticQuery(query);
  return (
    <Columns>
      <Column isHidden="mobile" isSize={4}>
        <Img fluid={data.file.childImageSharp.fluid} alt="" />
      </Column>
      <Column isSize={{ mobile: 12, desktop: 7 }} isOffset={{ desktop: 1 }}>
        <ServicesContent>
          <ServiceTitle>Cobuild: Product Development</ServiceTitle>
          <ServicesSubTitle>
            Cobuild Is the process of transforming an idea in a sustainable business, through the
            combination and collaboration of the areas of Lean Entrepreneurship, Business Strategy,
            Technological Innovation, and Exponential Growth.
          </ServicesSubTitle>
          <Paragraph>
            In this process, we evaluate your idea and help you shape it into a Value Proposition,
            and test it if necessary. After that, we design together the first version of your
            product with the purpose of Market Validation, or Product Market Fit to test if we
            satisfy the need that we intend to satisfy and to acquire our first Customers. From this
            point and forward we focus on improving the experience, acquire customer and growth.
          </Paragraph>
        </ServicesContent>
      </Column>
    </Columns>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "service/product-development.png" }) {
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

export default ServicesProductDevelopment;
