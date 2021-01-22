import React from 'react';
import SeoMetaTags from '../components/SeoMetaTags';
import { Banner } from '../components/logistics-landing/Banner';
import { About } from '../components/logistics-landing/About';
import { Service } from '../components/logistics-landing/Service';
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
      <About />
      <Service />
      <Project />
      <Testimonial />
      <Contact />
      <Brand />
      <Footer />
    </div>
  </div>
);

export default IndexPage;
