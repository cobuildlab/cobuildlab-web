import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Columns, Column, Box } from 'bloomer';

const Badge = styled.p`
  font-size: 1rem;
  font-weight: bold;
  marginBottom: 0px !important;
  text-align: center;
`;

const Title = styled.p`
  text-align: center
  color: #244a62;
  font-wight: bold;
`;

const BadgeIndustry = () => {
  return (
    <Fragment>
      <Title className="subtitle mt-3 mb-2 is-marginless">
        <b>We specialize in these industries:</b>
      </Title>
      
      <Columns isDesktop>
        <Column>
          <Box>
            <Badge>Advertising and Retailling</Badge>
          </Box>
        </Column>
        <Column>
          <Box>
            <Badge>Fitness and Fashion</Badge>
          </Box>
        </Column>
        <Column>
          <Box>
            <Badge>Communities and Lifestyle</Badge>
          </Box>
        </Column>
        <Column>
          <Box>
            <Badge>ERP Software</Badge>
          </Box>
        </Column>
      </Columns>
      
    </Fragment>
  );
};
export default BadgeIndustry;
