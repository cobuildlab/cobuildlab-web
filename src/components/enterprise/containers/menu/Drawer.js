import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Icon } from 'react-icons-kit';
import { longArrowLeft } from 'react-icons-kit/fa';
import styled, { keyframes } from 'styled-components';


const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const overlayAnimation = keyframes`
  @keyframes overlay {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 0.5;
    }
  }
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  opacity: 0.5;
  z-index: 6;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  animation: ${overlayAnimation} .1.5s ease-out;
  display: ${ ({ isVisible }) => isVisible ? 'block' : 'none'}
`;


const menuAnimation = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0%);
  }
`;

const DrawerContent = styled.div`
  width: 250px;
  height: 100%;
  right: 0;
  top: 0;
  position: absolute;
  background-color: white;
  animation: ${menuAnimation} .4s ease-out;
  display: ${ ({ isVisible }) => isVisible ? 'block' : 'none'}
`;

const DrawerHeader = styled.div`
  padding: 1em 1em;
  color: #264A60;
  letter-spacing: 1.2px;
  cursor: pointer;
  transition: all .2s linear;
  &:hover {
    color: #E76C29
  }
`;

const ArrowIcon = styled(Icon)`
  margin-right: 15px;
`;

const container = typeof document !== 'undefined' ? document.getElementsByTagName("body")[0] : null;

export default class Drawer extends PureComponent {

  constructor() {
    super();
    // Use a ternary operator to make sure that the document object is defined
    this.el = typeof document !== 'undefined' ? document.createElement('div') : null;
  }

  componentDidMount = () => {    
    container.appendChild(this.el);
  }

  componentWillUnmount = () => {
    container.removeChild(this.el);
  }

  render() {
    const { visible, onClose, children } = this.props;

    if (this.el) {
      return ReactDOM.createPortal(
        <DrawerContainer>
          <Overlay isVisible={visible} onClick={onClose} />
          <DrawerContent isVisible={visible}>
            <DrawerHeader onClick={onClose}>
              <ArrowIcon size={24} icon={longArrowLeft} />
            </DrawerHeader>
            {children}
          </DrawerContent>
        </DrawerContainer>,
        this.el,
      );
    } else {
      return null;
    }

  }
}


Drawer.defaultProps = {
  onClose: () => null,
  visible: false,
};

Drawer.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

