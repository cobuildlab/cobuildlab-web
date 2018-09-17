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
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

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
      <Navbar className="isTransparent" style={{ margin: '0' }}>
        <Container>
          <NavbarBrand>
            <NavbarItem>
              <img src={logo} style={{ marginRight: 5 }} />
            </NavbarItem>
            <NavbarItem isHidden="desktop">
              <Icon className="fa fa-github" />
            </NavbarItem>
            <NavbarItem isHidden="desktop">
              <Icon className="fa fa-twitter" style={{ color: '#55acee' }} />
            </NavbarItem>
            <NavbarBurger
              isActive={this.state.isActive}
              onClick={this.onClickNav}
            />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarEnd>
              <NavbarItem>
                <Link to="/">Home</Link>
              </NavbarItem>
              <NavbarItem href="#process">Cobuild Process</NavbarItem>
              <NavbarItem>
                <Link to="/customer-success-stories">
                  Customer Success Stories
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="/services">Services</Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="/blog">Blog</Link>
              </NavbarItem>
              <NavbarItem href="#/">Contact Us</NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
    )
  }
}
export default header
