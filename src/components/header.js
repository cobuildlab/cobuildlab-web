import React from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarEnd,
  Icon,
} from 'bloomer'
import '../assets/css/index.css'
import logo from '../resources/cobuildlab.png'
import '../assets/css/index.css'

class header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  onClickNav = () => {
    this.setState(({ isActive }) => ({
      isActive: !isActive,
    }))
  }
  render() {
    return (
      <Navbar className="isTransparent navbar-absolute" style={{ margin: '0' }}>
        <Container>
          <NavbarBrand>
            <NavbarItem>
              <Link className="link-nav" to="/">
                <img src={logo} style={{ marginRight: 5 }} />
              </Link>
            </NavbarItem>
            <NavbarBurger
              isActive={this.state.isActive}
              onClick={this.onClickNav}
            />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarEnd>
              <NavbarItem>
                <Link className="link-nav" to="/">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="link-nav" to="/#process">
                  Cobuild Process
                </Link>
              </NavbarItem>
              {/* <NavbarItem>
                <Link className="link-nav" to="/customer-success-stories">
                  Customer Success Stories
                </Link>
              </NavbarItem> */}
              <NavbarItem>
                <Link className="link-nav" to="/services">
                  Services
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="link-nav" to="/blog">
                  Blog
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="link-nav" to="/#contact">
                  Contact Us
                </Link>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
    )
  }
}
export default header
