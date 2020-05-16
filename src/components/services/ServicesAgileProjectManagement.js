import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Column, Columns } from 'bloomer';
import Img from 'gatsby-image';
import ServiceTitle from './ServicesTitle';
import ServicesSubTitle from './ServicesSubTitle';
import ServicesContent from './ServicesContent';
import Paragraph from '../Typography/Paragraph';

const ServicesAgileProjectManagement = () => {
  const data = useStaticQuery(query);
  return (
    <Columns>
      <Column isHidden="mobile" isSize={4}>
        <Img fluid={data.file.childImageSharp.fluid} alt="" />
      </Column>
      <Column isSize={{ mobile: 12, desktop: 7 }} isOffset={{ desktop: 1 }}>
        <ServicesContent>
          <ServiceTitle>Agile Project Management</ServiceTitle>
          <ServicesSubTitle>
            Let our experience drive the success of your projects.
          </ServicesSubTitle>
          <Paragraph>
            Our senior&rsquo;s product managers and agile coaches work with you to build and deliver
            software effectively. Your team would be transformed through education of the most
            appropriate agile techniques and best practices
          </Paragraph>
        </ServicesContent>
      </Column>
    </Columns>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "service/project-management.png" }) {
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

export default ServicesAgileProjectManagement;
