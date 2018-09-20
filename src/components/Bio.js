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

import profilePic from './profile-pic.jpg'


class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: '15',
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: 15,
            marginBottom: 0,
            width: 20,
            height: 20,
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
