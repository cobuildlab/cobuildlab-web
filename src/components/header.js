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
  Icon
} from 'bloomer';
import '../assets/css/index.css'
import logo  from '../resources/cobuildlab.png' 
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
              <img src={logo} style={{ marginRight: 5, }} />
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
              <Icon className='fa fa-github' />
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
              <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
          </NavbarItem>
          <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
      </NavbarBrand>
      <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarEnd>
            <NavbarItem href='#/'>Home</NavbarItem>
            <NavbarItem href='#process'>Cobuild Process</NavbarItem>
            <NavbarItem href='#/'>Customer Success Stories </NavbarItem>
            <NavbarItem href='#/'>Services</NavbarItem>
            <NavbarItem href='#/'>Blog</NavbarItem>
            <NavbarItem href='#/'>Contact Us</NavbarItem>
          </NavbarEnd>
      </NavbarMenu>
      </Container>
      </Navbar>
    )
  }
}
export default header
