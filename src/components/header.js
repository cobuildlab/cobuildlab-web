import React from 'react';
import Link from 'gatsby-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../resources/cobuildlab.png';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={Logo} width="400" height="86" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cobuilding Steps</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Customer Success Stories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>);

  }
};

export default Header;
