import React from 'react';
import Footer from './Footer';
import '@2020/css/var.scss';
import '@2020/css/common.scss';
import 'bulma';

export default class Template extends React.Component {
  render() {
    const { children } = this.props;
    const siteKey = process.env.RECAPTCHA_SITEKEY;
    return (
      <div style={{ overflow: 'hidden'}}>
        {children}
        <Footer siteKey={siteKey} />
      </div>
    );
  }
}

