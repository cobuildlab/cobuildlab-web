import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const TechnicalValueImage = () => {
  const data = useStaticQuery(query);
  return <img src={data.file.publicURL} alt="" />;
};

const query = graphql`
  query {
    file(relativePath: { eq: "2020-value/coubuild-t.svg" }) {
      publicURL
    }
  }
`;

export default TechnicalValueImage;
