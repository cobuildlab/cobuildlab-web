import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FormGroup } from 'reactstrap';
import { Container, Columns, Column } from 'bloomer';
import InputBox from '../../components/input';
import PreviewIcon from '../../components/icon';
import Menu from '../menu';
import Image from '../../components/image';
import logo from '../../../../assets/images/Logo.png';
import { Title } from '../../components/title';
import Login from './login';
import { user, search, x } from 'react-icons-kit/feather';
import componse from '../../../../utils/styles-componse';
import styles from './css/navbar.module.scss';

console.log(styles);

/**
 *
 */
function Navbar() {
  const [activeClass, setactiveClass] = useState(false);
  const [searchValue, setSearch] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        let scoll = null;
        if (window.scrollY === 0) {
          scoll = false;
        } else {
          scoll = true;
        }
        setactiveClass(scoll);
      });
    }
  }, []);

  const searchClick = () => {
    setSearch(!searchValue);
  };
  const loginClick = () => {
    setLogin(!login);
  };

  const headerStyles = componse(styles.header, activeClass ? styles.sticky : '');

  return (
    <div className={styles.app_header}>
      <header className={headerStyles}>
        <Container>
          <Columns isDisplay="flex" isMarginless>
            <Column isPaddingless isSize={{ mobile: 7 }}>
              <div className={styles.content}>
                <div className={styles.logo_wrapper}>
                  <Link to="/">
                    <Image Path={logo} />
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
      </header>
    </div>
  );
}

export default Navbar;

/**.
 *
 *
 *
 *
 */
