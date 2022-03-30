import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H4 from '../Typography/H4';

const Container = styled.div`
  margin-bottom: 1.5em;
  margin-top: 2.5em;
`;

const Title = styled(H4)`
  font-size: calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.2;
`;

const DetailsTitle = ({ children, isBold }) => (
  <Container>
    <Title
      style={{
        fontFamily: isBold ? '' : "'Lato-light', sans-serif !important",
        fontWeight: isBold ? 'bold' : '100',
      }}>
      {children}
    </Title>
  </Container>
);

DetailsTitle.defaultProps = {
  isBold: true,
};

DetailsTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isBold: PropTypes.bool,
};

export default DetailsTitle;
