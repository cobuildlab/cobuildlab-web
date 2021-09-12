import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Mansory from '../Mansory/Mansory';

const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "portfolio/story-rocket" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const StoryRocket = () => {
  const data = useStaticQuery(query);
  return <Mansory data={data.allFile.edges} />;
};

export default StoryRocket;
