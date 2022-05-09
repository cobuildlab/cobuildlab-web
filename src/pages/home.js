import React from 'react';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import 'bulma/css/bulma.css';
import Theme from '../components/2022/Theme';
import Layout from '../components/2022/Layout';
import Header from '../components/2022/headers/Header';

const Home = () => {
  console.log('Home page rendered');
  return (
    <Theme>
      <Layout>
        <SeoMetaTags lang="en" />
        <Header />
      </Layout>
    </Theme>
  );
};

export default Home;
