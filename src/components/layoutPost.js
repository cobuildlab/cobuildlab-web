import React from 'react';
import '../assets/css/index.css';
import HeaderPost from './headerPost';
import Layout from './2020/Layout';
import PropTypes from 'prop-types';

class LayoutPost extends React.Component {
  render() {
    const { children } = this.props;
    // const siteKey = process.env.RECAPTCHA_SITEKEY;
    return (
      <Layout>
        <HeaderPost />
        {children}
      </Layout>
    );
  }
}

LayoutPost.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default LayoutPost;
