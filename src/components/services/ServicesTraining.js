import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Column, Columns } from 'bloomer';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ServiceTitle from './ServicesTitle';
import ServicesSubTitle from './ServicesSubTitle';
import ServicesContent from './ServicesContent';
import Paragraph from '../Typography/Paragraph';

const List = styled.ul``;

const Item = styled.li`
  font-size: 18px;
  padding-left: 0.5em;
  color: #264a60;
  &:before {
    content: '-';
    color: #d05b1b;
    padding-right: 0.5em;
  }
`;

const ServicesTraining = () => {
  const data = useStaticQuery(query);
  return (
    <Columns>
      <Column isHidden="mobile" isSize={4}>
        <Img fluid={data.file.childImageSharp.fluid} alt="" />
      </Column>
      <Column isSize={{ mobile: 12, desktop: 7 }} isOffset={{ desktop: 1 }}>
        <ServicesContent>
          <ServiceTitle>Training</ServiceTitle>
          <ServicesSubTitle>
            With over 10 years of experience developing web and mobile applications withour agile
            techniques we can drive success to your Software Development Team.
          </ServicesSubTitle>
          <Paragraph>We provide training in the areas of:</Paragraph>
          <List>
            <Item>Scrum framework</Item>
            <Item>Continuous integration and Continuous Delivery for Web Development</Item>
            <Item>React and React Native development</Item>
            <Item>API design and development</Item>
          </List>
        </ServicesContent>
      </Column>
    </Columns>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "service/training.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default ServicesTraining;
