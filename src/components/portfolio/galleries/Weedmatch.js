import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Mansory from '../Mansory/Mansory';

const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "customers/weedmatch/slider" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`;

const Weedmatch = () => {
  const data = useStaticQuery(query);
  return <Mansory data={data.allFile.edges} />;
};

export default Weedmatch;
