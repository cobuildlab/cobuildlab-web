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

const EnviewCloud = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Enview Cloud'}
        description={
          <>
            <p>
              eNView is responsible for measuring noise, vibration, and dust levels at construction
              sites, workspaces, and other sites where required.
            </p>
          </>
        }
        to={'/customer-success-stories/enview-cloud'}>
        <Box>
          <StaticImage
            src={'./../../../../assets/images/customers/enview-cloud/enview-cloud.png'}
            objectFit={'contain'}
            alt="Enview cloud Logo"
          />
        </Box>
      </Card>
    </Column>
  );
};

export default EnviewCloud;
