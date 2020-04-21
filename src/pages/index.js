import React from 'react';
import Navbar from '../components/enterprise/containers/navbar';
import Banner from '../components/enterprise/containers/banner';
import Service from '../components/enterprise/containers/service';
import About from '../components/enterprise/containers/about';
import UniqueValueProps from '../components/enterprise/containers/unique-value-props';
import Video from '../components/enterprise/containers/video';
import Skills from '../components/enterprise/containers/skills';
import Project from '../components/enterprise/containers/project';
import EnterpriseCustomerSuccessStories from '../components/enterprise/containers/EnterpriseCustomerSuccessStories';
import Testimonial from '../components/enterprise/containers/testimonial/Testimonial';
import Contact from '../components/enterprise/containers/contact/ContactEnterprise';
import Brand from '../components/enterprise/containers/brands';
import Footer from '../components/enterprise/containers/footer/Footer';

import 'bulma';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import '../assets/scss/index.scss';

const IndexPage = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div id="main-content">
        <Banner />
        <Service />
        <About />
        <UniqueValueProps />
        <Video />
        <Skills />
        <Project />
        <EnterpriseCustomerSuccessStories />
        <Testimonial />
        <Contact />
        <Brand />
        <Footer />
        {/* <ThemeColor /> */}
      </div>
    </div>
  );
};

/*
  <ThemeColor />
  <ThemeOption />.
 */

export default IndexPage;
