import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Layout = ({ children, data }) => {
  return (children());
};

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query IndexTemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
