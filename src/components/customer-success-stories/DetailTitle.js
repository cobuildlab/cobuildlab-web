import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import { TextOrange } from '../2021/text/TextHelpers';

const Container = styled.div`
  margin-bottom: 1.5em;
`;

const Title = styled(H1)`
  font-size: calc(35px + (100 - 35) * ((100vw - 320px) / (1920 - 320)));
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const DetailsTitle = ({ children }) => (
  <Container>
    <Title>
      <TextOrange>{children}</TextOrange>
    </Title>
  </Container>
);

DetailsTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DetailsTitle;
