import React from 'react';
import { Column, Columns } from 'bloomer';
import StudyCase from './StudyCase';
import styled from 'styled-components';

const StudyCaseContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
`;

const CaseStudy = () => {
  return (
    <Columns>
      <Column>
        <StudyCaseContainer>
          <StudyCase />
        </StudyCaseContainer>
      </Column>
    </Columns>
  );
};

export { CaseStudy };
