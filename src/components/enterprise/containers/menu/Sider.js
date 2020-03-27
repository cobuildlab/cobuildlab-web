import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Icon } from 'react-icons-kit';
import { thickLeft } from 'react-icons-kit/iconic/thickLeft';
import styles from './css/index.module.scss';
import componse from '../../../../utils/styles-componse';

const Sider = ({ visible, onClose }) => {
  if (!document) return null;

  const overlayStyle = componse(styles.overlay, visible ? styles.show : styles.hidden);

  const menuStyles = componse(styles.menu, visible ? styles.show : styles.hidden);

  const headerStyle = componse(styles.menu_item);

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
    document.body,
  );
};

Sider.defaultProps = {
  onClose: () => null,
  visible: false,
};

Sider.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
};

export default Sider;
