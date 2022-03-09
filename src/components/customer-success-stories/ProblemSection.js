import React from 'react';
import PropTypes from 'prop-types';
import DetailSubTitle from './DetailSubTitle';
import styled from 'styled-components';
import StickySection from './StickySection';
import { Column, Columns, Container, Section } from 'bloomer';
import { TextOrange } from '../2021/text/TextHelpers';

const LightSection = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 13px 15px 5px #00000024;
  position: relative;
`;

const ProblemSection = ({ children, image }) => (
  <LightSection>
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ tablet: 12, desktop: 6 }}>
            <StickySection>{image}</StickySection>
          </Column>
          <Column isSize={{ tablet: 12, desktop: 6 }}>
            <DetailSubTitle>
              The <TextOrange> Problem </TextOrange>
            </DetailSubTitle>
            {children}
          </Column>
        </Columns>
      </Container>
    </Section>
  </LightSection>
);

ProblemSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  image: PropTypes.node.isRequired,
};

export default ProblemSection;
