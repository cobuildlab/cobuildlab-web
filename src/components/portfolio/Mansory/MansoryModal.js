import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal, ModalBackground, ModalContent, ModalClose } from 'bloomer';

const Container = styled(Modal)`
  z-index: 500;
`;

const Content = styled(ModalContent)`
  width: 80%;
  margin: auto;
  padding: 2em;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2.3em;
  }
`;

export const ModalContainer = ({ children, visible, onClose }) => (
  <Container isActive={visible}>
    <ModalBackground hasTextColor="dark" onClick={onClose} />
    <Content>{children}</Content>
    <ModalClose onClick={onClose} />
  </Container>
);

ModalContainer.defaultProps = {
  visible: false,
  onClose: () => null,
};

ModalContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ModalContainer;
