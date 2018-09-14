import React from 'react'
import { Link } from 'gatsby'
import '../assets/css/index.css'
import Header from './header'
import Footer from './footer'
import { rhythm, scale } from '../utils/typography'
import { Container } from 'bloomer/lib/layout/Container';

class Template extends React.Component {
  render() {
    const { children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // let header

    
    /* if (location.pathname === rootPath) { */
    // header = (
    //   <h1
    //     style={{
    //       ...scale(1.5),
    //       marginBottom: rhythm(1.5),
    //       marginTop: 0,
    //     }}
    //   >
    //     <Link
    //       style={{
    //         boxShadow: 'none',
    //         textDecoration: 'none',
    //         color: 'inherit',
    //       }}
    //       to={'/'}
    //     >
    //       Gatsby Starter Blog
    //     </Link>
    //   </h1>
    // )
    // /* } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: 'Montserrat, sans-serif',
    //         marginTop: 0,
    //         marginBottom: rhythm(-1),
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         Gatsby Starter Blog
    //       </Link>
    //     </h3>
    //   )
    // } */
    return (
      <div>
      <Header/>
        {children}
      <Footer/>
      </div>
    )
  }
}

export default Template
