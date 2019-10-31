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
} from 'bloomer'
import '../assets/css/index.css'
import logo from '../resources/cobuildlab.png'
import '../assets/css/index.css'
// import useScript from '../utils/useScript'

class header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }
  componentDidMount() {
    const script = document.createElement('script')

    script.src =
      "<script type='text/javascript' data-cfasync='false'>window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: '1a20d805-24ed-4533-a6db-9172a94a63a2', f: true }); done = true; } }; })();</script>"
    script.async = true

    document.body.appendChild(script)
  }
  onClickNav = () => {
    this.setState(({ isActive }) => ({
      isActive: !isActive,
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          className="is-hidden-desktop is-hidden-tablet-only"
          style={{ margin: '0' }}
        >
          <Container isFluid>
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
            <NavbarMenu
              isActive={this.state.isActive}
              onClick={this.onClickNav}
            >
              <NavbarEnd>
                <NavbarItem>
                  <Link className="link-nav" to="/services">
                    Services
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav" to="/customer-success-stories">
                    Customer Success Stories
                  </Link>
                </NavbarItem>

                <NavbarItem>
                  <Link className="link-nav" to="/blog">
                    Blog
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link to="/#contact" className="link-nav">
                    Contact Us
                  </Link>
                </NavbarItem>
              </NavbarEnd>
            </NavbarMenu>
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

              <NavbarBurger
                isActive={this.state.isActive}
                onClick={this.onClickNav}
              />
            </NavbarBrand>
            <NavbarMenu
              isActive={this.state.isActive}
              onClick={this.onClickNav}
            >
              <NavbarEnd>
                <NavbarItem>
                  <Link className="link-nav" to="/services">
                    Services
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav" to="/customer-success-stories">
                    Customer Success Stories
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
      </React.Fragment>
    )
  }
}

export default header
