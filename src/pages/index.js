import React from 'react';
import 'bootstrap';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Main from '../components/main';

const IndexPage = () => (
  <div>
    <Helmet>
      <meta name="description"
            content="Cobuild Lab is a technological entrepreneurship accelerator, focused on optimizing the transformation of ideas into profitable businesses"/>
      <link rel="canonical" href="https://cobuild.com/"/>
      <meta property="og:locale" content="en_US"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Cobuild Lab | Idea Accelerator In Miami, Florida"/>
      <meta property="og:description"
            content="4Geeks Cobuild Lab is a technological entrepreneurship accelerator, focused on optimizing the transformation of ideas into profitable businesses"/>
      <meta property="og:url" content="https://cobuildlab.com/"/>
      <meta property="og:site_name" content="Cobuild Lab"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:description"
            content="4Geeks Cobuild Lab is a technological entrepreneurship accelerator, focused on optimizing the transformation of ideas into profitable businesses"/>
      <meta name="twitter:title" content="Cobuild Lab | Idea Accelerator In Miami, Florida"/>
      <meta name="twitter:site" content="@cobuildlab"/>
      <meta name="twitter:creator" content="@cobuildlab"/>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato" />
    </Helmet>
    <Header/>
    <Main/>
  </div>
);

export default IndexPage;
