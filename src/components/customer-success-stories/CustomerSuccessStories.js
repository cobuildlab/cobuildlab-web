// April 2020
// this is used in the new design dont delete
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Columns, Column } from 'bloomer';
import Card from './Card';

const query = graphql`
  query {
    allCustomerSuccessStoriesDataJson {
      edges {
        node {
          image {
            childImageSharp {
              fluid(quality: 30) {
                base64
                sizes
                aspectRatio
                srcWebp
                srcSetWebp
              }
            }
          }
          slug
          title
          description
        }
      }
    }
  }
`;

const CustomerSuccessStories = () => {
  const data = useStaticQuery(query);
  const items = data.allCustomerSuccessStoriesDataJson.edges.map(({ node }) => (
    <Column isSize={{ mobile: 12, tablet: 4 }} key={node.title} isPaddingless>
      <Card
        title={node.title}
        description={node.description}
        image={node.image.childImageSharp.fluid}
        to={node.slug}
      />
    </Column>
  ));

  return (
    <Columns isDisplay="flex" isMultiline>
      {items}
    </Columns>
  );
};

export default CustomerSuccessStories;
