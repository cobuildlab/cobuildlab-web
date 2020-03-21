import React from 'react';
import { Link, withPrefix } from 'gatsby';
import '../assets/css/index.css';
import HeaderPost from './headerPost';
import MyFooter from './footer';

class LayoutPost extends React.Component {
  render() {
    const { children } = this.props;
    const siteKey = process.env.RECAPTCHA_SITEKEY;
    return (
      <div className="content">
        <HeaderPost/>
        {children}
        <MyFooter siteKey={siteKey} />
      </div>
    );
  }
}

export default LayoutPost;
