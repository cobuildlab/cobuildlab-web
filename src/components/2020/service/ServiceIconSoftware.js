import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ServiceIcon from './ServiceIcon';

const ServiceIconSoftware = () => {
  const data = useStaticQuery(query);
  return <ServiceIcon src={data.file.publicURL} />;
};

const query = graphql`
  query {
    file(relativePath: { eq: "icons/Education-training.svg" }) {
      publicURL
    }
  }
`;

export default ServiceIconSoftware;
