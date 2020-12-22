import React from 'react';
import SeoMetaTags from '../components/SeoMetaTags';
import Banner from '../components/enterprise-logistics/containers/banner';
import IncubatorLink from '../components/enterprise/containers/incubator/Incubator';
import Service from '../components/enterprise-logistics/containers/service';
import About from '../components/enterprise/containers/about';
import Project from '../components/enterprise/containers/project';
import Testimonial from '../components/enterprise/containers/testimonial/Testimonial';
import Contact from '../components/enterprise/containers/contact/ContactEnterprise';
import Brand from '../components/enterprise/containers/brands';
import Footer from '../components/enterprise/containers/footer/Footer';

import 'bulma/css/bulma.css';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import '../assets/scss/index.scss';
import Header from '../components/header/Header';

const IndexPage = () => (
  <div className="main-wrapper">
    <SeoMetaTags />
    <Header />
    <div id="main-content">
      <Banner />
      {/*<IncubatorLink />*/}
      {/*<About />*/}
      {/*<Service />*/}
      {/*<Project />*/}
      {/*<Testimonial />*/}
      <Contact />
      <Brand />
      <Footer />
    </div>
  </div>
);

export default IndexPage;
