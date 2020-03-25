import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PreviewIcon from '../../components/icon';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { longArrowLeft } from 'react-icons-kit/fa';
import './menu.scss';

/**
 *
 */
function Menu() {
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

  const escFunction = (event) => {
    console.log('fdsfsdfds');

    if (event.keyCode === 27) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  const activeLink = (link) => {
    toggle();
    setActive(link);
    return 60;
  };

  return (
    <nav className="navbar navbar-wrapper menu-wrapper">
      <div className="sidebar-toggle">
        <button
          className="menu-btn navbar-toggler"
          type="button"
          id="navbar-menu-btn"
          onClick={toggle}>
          <span className="btn-block"></span>
          <p className="title">Menu</p>
        </button>
      </div>
      <div className={isOpen ? 'open' : ''} id="sidebar">
        <div className="sidebar-overlay"></div>
        <div className="sidebar-wrapper">
          <div className="slidebar-title-wrapper">
            <div className="slidebar-title">
              <div id="slidebar-close-btn" onClick={toggle}>
                <span>
                  <PreviewIcon icon={longArrowLeft} />
                </span>
              </div>
            </div>
          </div>
          <div className="navbar-link-wrapper">
            <ul className="navbar-nav navbar-menu-frist" id="menu-navbar">
              {menuItems.allDataJson.edges[0].node.sidebar.map((file, index) => (
                <li key={index} className={`nav-item-box ${active === file.href ? 'active' : ''}`}>
                  <AnchorLink offset={() => activeLink(file.href)} href={file.href}>
                    <span>{file.title}</span>
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
