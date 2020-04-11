import React from 'react';
import styled from 'styled-components';
import { Column, Columns } from 'bloomer';
import graphic from '../../resources/graficas-1.png';
import { CustomH2 as H2 } from './LandingTypography';

const GraphicContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  & img {
    width: 300px;
    height: 300px;
  }
`;

const AgileGraphic = () => {
  return (
    <Columns isVCentered>
      <Column>
        <GraphicContainer>
          <img alt={'Graphic'} src={graphic} className="img-graphic" />
        </GraphicContainer>
      </Column>
      <Column>
        <H2>Fast and Effective Development using agile methodologies and techniques.</H2>
      </Column>
    </Columns>
  );
};

export { AgileGraphic };
