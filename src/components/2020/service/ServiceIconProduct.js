import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ServiceIcon from './ServiceIcon';

const ServiceIconProduct = () => {
  const data = useStaticQuery(query);
  return <ServiceIcon src={data.file.publicURL} />;
};

const query = graphql`
  query {
    file(relativePath: { eq: "icons/Product-development.svg" }) {
      publicURL
    }
  }
`;

export default ServiceIconProduct;
