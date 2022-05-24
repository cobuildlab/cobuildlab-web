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

const CsfLabeler = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Csf Labeler'}
        description={
          <>
            <p>
              CSF LABELER is a company that works in the courier freight forwarding business that,
              in the face of technological advances and the presence of avant-garde competition.
            </p>
          </>
        }
        to={'/customer-success-stories/csf-labeler'}>
        <Box>
          <StaticImage
            src={'./../../../../assets/images/customers/csf-labeler/G8KL4dne_4x1.png'}
            objectFit={'contain'}
            width={'80%'}
            alt="Csf Labelel Logo"
          />
        </Box>
      </Card>
    </Column>
  );
};

export default CsfLabeler;
