import React from 'react';
import { Link } from 'gatsby';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarItem,
} from 'bloomer';
import '../assets/css/index.css';
import logo from '../resources/cobuildlab.png';


class headerLanding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="is-hidden-desktop is-hidden-tablet-only" style={{ margin: '0' }}>
          <Container isFluid>
            <NavbarBrand>
              <NavbarItem>
                <Link className="link-nav" to="/">
                  <img src={logo} style={{ marginRight: 5 }}/>
                </Link>
              </NavbarItem>
            </NavbarBrand>
          </Container>
        </Navbar>
        <Navbar
          className="isTransparent navbar-absolute is-hidden-mobile"
          style={{ margin: '0' }}
        >
          <Container isFluid className="mt-25">
            <NavbarBrand>
              <Link className="link-nav" to="/">
                <img
                  src={logo}
                  style={{ marginRight: 5 }}
                  width="229"
                  height="49"
                />
              </Link>
            </NavbarBrand>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default headerLanding;
