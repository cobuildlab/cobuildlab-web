import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Columns, Column } from 'bloomer';
import PricingForm from './PricingForm';

const PricingContact = () => {
  const data = useStaticQuery(query);

  return (
    <Container>
      <Columns>
        <Column isSize={6}>
          <img src={data.file.publicURL} alt="" />
        </Column>
        <Column isSize={6}>
          <PricingForm />
        </Column>
      </Columns>
    </Container>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "pricing/contact.svg" }) {
      publicURL
    }
  }
`;

export default PricingContact;
