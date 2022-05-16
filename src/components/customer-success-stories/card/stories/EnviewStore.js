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

const EnviewStore = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Enview Store'}
        description={
          <>
            <p>
              eNView is responsible for measuring noise, vibration, and dust levels at construction
              sites, workspaces, and other sites where required.
            </p>
          </>
        }
        to={'/customer-success-stories/enview-store'}>
        <Box>
          <StaticImage
            src={'./../../../../assets/images/customers/enview-store/enviewlogo_black-min.png'}
            objectFit={'contain'}
            alt="Enview Store Logo"
          />
        </Box>
      </Card>
    </Column>
  );
};

export default EnviewStore;
