import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

const IconContainer = styled.span`
  position: absolute;
  display: inline-block;
  margin: auto;
  animation: ${loading} 0.5s linear infinite;
  border-radius: 290486px;
  border: 2px solid white;
  border-right-color: transparent;
  border-top-color: transparent;
  width: 20px;
  height: 20px;
  visibility: ${({ isLoading }) => (!isLoading ? 'hidden' : 'visible')};
`;

const ChildrenContainer = styled.div`
  visibility: ${({ isLoading }) => (isLoading ? 'hidden' : 'visible')};
`;

const Text = styled.span`
  color: inherit !important;
  font-size: 16px;
  text-transform: ${({ isCapitalize }) => (isCapitalize ? 'capitalize' : 'initial')};
`;

const ButtonLoading = ({ isLoading, children, isCapitalize }) => (
  <Fragment>
    <IconContainer isLoading={isLoading} />
    <ChildrenContainer isLoading={isLoading}>
      <Text isCapitalize={isCapitalize}>{children}</Text>
    </ChildrenContainer>
  </Fragment>
);

ButtonLoading.defaultProps = {
  isCapitalize: true,
};

ButtonLoading.propTypes = {
  isCapitalize: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(ButtonLoading);
