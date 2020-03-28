import React, { useEffect, useState } from 'react';
import { RingSpinner } from 'react-spinners-kit';
import Navbar from '../../components/enterprise/containers/navbar';
import Banner from '../../components/enterprise/containers/banner';
import Service from '../../components/enterprise/containers/service';
import About from '../../components/enterprise/containers/about';
import Blog from '../../components/enterprise/containers/blog';
import Video from '../../components/enterprise/containers/video';
import Skills from '../../components/enterprise/containers/skills';
import Project from '../../components/enterprise/containers/project';
import Portfolio from '../../components/enterprise/containers/portfolio';
import Testimonial from '../../components/enterprise/containers/testimonial';
import Contact from '../../components/enterprise/containers/contact';
import Brand from '../../components/enterprise/containers/brands';
import Footer from '../../components/enterprise/containers/footer';
import CopyRight from '../../components/enterprise/containers/copyright_text';
// import ThemeColor from '../../components/enterprise/containers/themecolor';
// import ThemeOption from '../../components/enterprise/containers/themeoptions';

// NOTE these styles cause problems on the new landing careful when you add them
// import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/scss/index.scss';

const IndexPage = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoader(true);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return loader ? (
    <div className="main-wrapper">
      <Navbar />
      <div id="main-content">
        <Banner ChangeClass={'demo1'} />
        <Service />
        <About />
        <Blog />
        <Video />
        <Skills />
        <Project />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Brand />
        <Footer />
        <CopyRight />
       
      </div>
    </div>
  ) : (
    <div className="theme-loader">
      <RingSpinner size={80} color="#e100ff" loading={!loader} />
    </div>
  );
};

/**
 *  <ThemeColor />
        <ThemeOption />.
 * 
 */

export default IndexPage;
