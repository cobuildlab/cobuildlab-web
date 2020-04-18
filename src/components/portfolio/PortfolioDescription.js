import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import Paragraph from '../Typography/Paragraph';

const Container = styled.div`
  padding: 0em 1em;
`;

const TitleContainer = styled.div`
  margin-bottom: 2em;
`;

const Content = styled(Paragraph)`
  line-height: 1.5;
`;

const PortfolioDescription = ({ children, title }) => (
  <Container>
    <TitleContainer>
      <H1>{title}</H1>
    </TitleContainer>
    <Content>{children}</Content>
  </Container>
);

PortfolioDescription.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
};

export default PortfolioDescription;
