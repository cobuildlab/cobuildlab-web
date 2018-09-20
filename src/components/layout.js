import React from 'react'
import { Link, withPrefix } from 'gatsby'
import '../assets/css/index.css'
import Header from './header'
import HeaderBlog from './headerBlog'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children } = this.props
    const blogRoute = window.location.href.slice(
      window.location.href.indexOf('/blog')
    )
    let header

    blogRoute.length <= 1 ? (header = <Header />) : (header = <HeaderBlog />)

    return (
      <div>
        {header}
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
