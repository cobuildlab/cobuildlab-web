import React from 'react'
import { Link } from 'gatsby'
import { 
  Container, 
  Navbar, 
  NavbarBrand, 
  NavbarItem, 
  NavbarBurger, 
  NavbarMenu, 
  NavbarStart, 
  NavbarDropdown, 
  NavbarEnd, 
  Icon, 
  Field, 
  Control, 
  Button, 
  NavbarLink, 
  NavbarDivider,
  Footer,
  Columns,
  Column,
  Content,
} from 'bloomer';
import '../assets/css/index.css'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Kyle Mathews</strong> who lives and works in San
          Francisco building useful things.{' '}
          <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
