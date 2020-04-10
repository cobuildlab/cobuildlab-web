import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../2020/Layout';
import Header from '../2020/Header';

const Container = styled.div`
  margin-top: 5em;
`;

const DetailLayout = ({ children }) => (
  <Layout>
    <Header />
    <Container>{children}</Container>
  </Layout>
);

DetailLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DetailLayout;
