import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Columns, Column } from 'bloomer';
import Menu from '../Menu';
import logo from '../../../../assets/images/cobuild-logo.png';
import componse from '../../../../utils/styles-componse';
import styles from './css/index.module.scss';

const Header = ({ children }) => {
  const [activeClass, setactiveClass] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      let scoll = null;
      if (window.scrollY === 0) {
        scoll = false;
      } else {
        scoll = true;
      }
      setactiveClass(scoll);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyles = componse(styles.header, activeClass ? styles.sticky : '');

  return (
    <div className={styles.app_header}>
      <header className={headerStyles}>{children}</header>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Navbar = () => (
  <Header>
    <Container>
      <Columns isDisplay="flex" isMarginless>
        <Column isPaddingless isSize={{ mobile: 7 }}>
          <div className={styles.content}>
            <div className={styles.logo_wrapper}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
        </Column>
        <Column isPaddingless isSize={{ mobile: 5 }}>
          <div className={styles.content}>
            <Menu />
          </div>
        </Column>
      </Columns>
    </Container>
  </Header>
);

export default Navbar;
