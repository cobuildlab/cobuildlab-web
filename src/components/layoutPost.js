import React from 'react'
import { Link, withPrefix } from 'gatsby'
import '../assets/css/index.css'
import HeaderPost from './headerPost'
import Footer from './footer'

class LayoutPost extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <HeaderPost/>
        {children}
        <Footer />
      </div>
    )
  }
}

export default LayoutPost
