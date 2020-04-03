import React from 'react';
import Navbar from '../../components/enterprise/containers/navbar';
import Banner from '../../components/enterprise/containers/banner';
import Service from '../../components/enterprise/containers/service';
import About from '../../components/enterprise/containers/about';
import UniqueValueProps from '../../components/enterprise/containers/unique-value-props';
import Video from '../../components/enterprise/containers/video';
import Skills from '../../components/enterprise/containers/skills';
import Project from '../../components/enterprise/containers/project';
import Portfolio from '../../components/enterprise/containers/portfolio';
// import Testimonial from '../../components/enterprise/containers/testimonial';
import Contact from '../../components/enterprise/containers/contact';
import Brand from '../../components/enterprise/containers/brands';
import Footer from '../../components/enterprise/containers/footer';
import CopyRight from '../../components/enterprise/containers/copyright_text';
import '../../assets/scss/index.scss';

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
        <Portfolio />
        {/*<Testimonial />*/}
        <Contact />
        <Brand />
        <Footer />
        <CopyRight />
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
