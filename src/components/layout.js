import React from 'react';
import { Link, withPrefix } from 'gatsby';
import '../assets/css/index.css';
import Header from './header';
import Footer from './footer';

class Template extends React.Component {
  render() {
    const { children } = this.props;
    const siteKey = process.env.RECAPTCHA_SITEKEY;
    return (
      <div>
        <Header/>
        {children}
        <Footer siteKey={siteKey} />
      </div>
    );
  }
}

export default Template;
