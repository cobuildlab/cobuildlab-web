import React from 'react';
import { Link, withPrefix } from 'gatsby';
import '../assets/css/index.css';
import HeaderPost from './headerPost';
import Footer from './footer';

class LayoutPost extends React.Component {
  render() {
    const { children } = this.props;
    const siteKey = process.env.RECAPTCHA_SITEKEY;
    return (
      <div className="content">
        <HeaderPost/>
        {children}
        <Footer siteKey={siteKey} />
      </div>
    );
  }
}

export default LayoutPost;
