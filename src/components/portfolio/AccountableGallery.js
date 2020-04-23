import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Mansory from './Mansory/Mansory';

const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "accountable" } }) {
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

const AccountableGallery = () => {
  const data = useStaticQuery(query);
  return <Mansory data={data.allFile.edges} />;
};

export default AccountableGallery;
