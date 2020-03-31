import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Icon } from 'react-icons-kit';
import { thickLeft } from 'react-icons-kit/iconic/thickLeft';
import styles from './css/index.module.scss';
import componse from '../../../../utils/styles-componse';


const container = typeof document !== 'undefined' ? document.getElementsByTagName("body")[0] : null;


export default class Sider extends PureComponent {

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
    const { visible, onClose } = this.props;

    const overlayStyle = componse(styles.overlay, visible ? styles.show : styles.hidden);

    const menuStyles = componse(styles.menu, visible ? styles.show : styles.hidden);
  
    const headerStyle = componse(styles.menu_item);

    if (this.el) {
      return ReactDOM.createPortal(
        <div className={styles.sider}>
          <div className={overlayStyle} onClick={onClose} />
          <ul className={menuStyles}>
            <li className={headerStyle} onClick={onClose}>
              <Icon size={24} icon={thickLeft} />
            </li>
            <li className={styles.menu_item}>hola</li>
            <li className={styles.menu_item}>hola</li>
            <li className={styles.menu_item}>hola</li>
            <li className={styles.menu_item}>hola</li>
            <li className={styles.menu_item}>hola</li>
          </ul>
        </div>,
        this.el,
      );
    } else {
      return null;
    }

  }
}


Sider.defaultProps = {
  onClose: () => null,
  visible: false,
};

Sider.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
};

