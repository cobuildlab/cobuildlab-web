import React from 'react';
import Card from '../Card';
import { Column } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Camron = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Camron'}
        description={
          <>
            <p>
              Katie is a Notary who works with a big group of Notaries providing services to
              different real estate companies and lawyers. She had the vision of creating a dynamic
              platform where notaries can log in, and use it for providing remote services.
            </p>
          </>
        }
        to={'/customer-success-stories/camron'}>
        <Box>
          <StaticImage
            src={'./../../../../assets/images/customers/camron/camron-logo.png'}
            objectFit={'contain'}
            alt="Camron Logo"
          />
        </Box>
      </Card>
    </Column>
  );
};

export default Camron;
