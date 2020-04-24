import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Mansory from '../Mansory/Mansory';

const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "storyRocket" } }) {
      edges {
        node {
          id
          childImageSharp {
            sizes {
              presentationHeight
              presentationWidth
              src
            }
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
