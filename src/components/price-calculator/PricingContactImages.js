import React, { memo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const PricingContactImages = () => {
  const data = useStaticQuery(query);
  return <img src={data.file.publicURL} alt="" />;
};

const query = graphql`
  query {
    file(relativePath: { eq: "pricing/contact.svg" }) {
      publicURL
    }
  }
`;

export default memo(PricingContactImages);
