import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Mansory from '../Mansory/Mansory';

const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "portfolio/charter" } }) {
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

const Charter = () => {
  const data = useStaticQuery(query);
  return <Mansory data={data.allFile.edges} />;
};

export default Charter;
