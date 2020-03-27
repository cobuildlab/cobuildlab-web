import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PreviewIcon from '../../components/icon';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { longArrowLeft } from 'react-icons-kit/fa';
import Sider from './Sider';
import styles from './css/index.module.scss';
import componse from '../../../../utils/styles-componse';

const toggleStyle = componse(styles.menu_btn, styles.navbar_toggle);

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState();
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = useStaticQuery(graphql`
    query MenuQuery {
      allDataJson {
        edges {
          node {
            sidebar {
              href
              id
              title
            }
          }
        }
      }
    }
  `);

  const handleOpen = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  const activeLink = (link) => {
    toggle();
    setActive(link);
    return 60;
  };

  return (
    <div className={styles.toggle_container}>
      <span className={toggleStyle} type="button" onClick={handleOpen}>
        <span className={styles.btn_block}></span>
        <span className={styles.title}>Menu</span>
      </span>
      <Sider visible={isOpen} onClose={handleOpen} />
    </div>
  );
};

export default Menu;
