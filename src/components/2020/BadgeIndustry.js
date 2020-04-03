import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Columns, Column, Box } from 'bloomer';

const Badge = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0px !important;
  text-align: center;
`;

const Title = styled.p`
  text-align: center
  color: #244a62;
  font-wight: bold;
`;

const StyledBox = styled(Box)`
  padding: 5px 10px;
`;

const BadgeIndustry = () => {
  return (
    <Fragment>
      <Title className="subtitle mt-3 mb-2 is-marginless">
        <b>We specialize in these industries:</b>
      </Title>

      <Columns isDesktop style={{ alignItems: 'center' }}>
        <Column>
          <StyledBox>
            <Badge>Advertising and Retailling</Badge>
          </StyledBox>
        </Column>
        <Column>
          <StyledBox>
            <Badge>Fitness and Fashion</Badge>
          </StyledBox>
        </Column>
        <Column>
          <StyledBox>
            <Badge>Communities and Lifestyle</Badge>
          </StyledBox>
        </Column>
        <Column>
          <StyledBox>
            <Badge>ERP Software</Badge>
          </StyledBox>
        </Column>
      </Columns>
    </Fragment>
  );
};
export default BadgeIndustry;
