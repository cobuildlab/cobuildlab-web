import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { timesCircleO } from 'react-icons-kit/fa/timesCircleO';
import { Icon } from 'react-icons-kit';

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.75);
`;

const IconContainer = styled.div`
  margin-right: 1em;
  color: #f5222d;
`;

const Error = ({ message }) => (
  <MessageContainer>
    <IconContainer>
      <Icon icon={timesCircleO} size={35} />
    </IconContainer>
    {message}
  </MessageContainer>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
