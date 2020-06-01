import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const BusinessValueImages = () => {
  const data = useStaticQuery(query);
  return <img src={data.file.publicURL} alt="" />;
};

const query = graphql`
  query {
    file(relativePath: { eq: "2020-value/coubuild-b.svg" }) {
      publicURL
    }
  }
`;

export default BusinessValueImages;
