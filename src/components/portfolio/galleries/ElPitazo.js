import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Mansory from '../Mansory/Mansory';

const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "portfolio/el-pitazo" } }) {
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

const ElPitazo = () => {
  const data = useStaticQuery(query);
  return <Mansory data={data.allFile.edges} />;
};

export default ElPitazo;
