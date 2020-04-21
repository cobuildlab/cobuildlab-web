import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H1 from '../Typography/H1';

const Container = styled.div`
  padding: 0em 1em;
`;

const TitleContainer = styled.div`
  margin-bottom: 2em;
`;

const PortfolioDescription = ({ title }) => (
  <Container>
    <TitleContainer>
      <H1>{title}</H1>
    </TitleContainer>
  </Container>
);

PortfolioDescription.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PortfolioDescription;
