import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
//TODO add this file to index.scss and import this here
import '../../../assets/css/2020/common.scss';
import 'bulma';

export default class Template extends React.Component {
  render() {
    const { children } = this.props;
    const siteKey = process.env.RECAPTCHA_SITEKEY;
    return (
      <div style={{ overflow: 'hidden' }}>
        {children}
        <Footer siteKey={siteKey} />
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
