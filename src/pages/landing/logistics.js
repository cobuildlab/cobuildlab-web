import React from 'react';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';
import { Service2 } from '../../components/2021/containers/Service2';
import { Banner } from '../../components/logistics-landing/Banner';
import { About } from '../../components/2021/containers/About';
import Project from '../../components/enterprise/containers/project';
import Testimonial from '../../components/enterprise/containers/testimonial/Testimonial';
import Contact from '../../components/enterprise/containers/contact/ContactEnterprise';
import Brand from '../../components/enterprise/containers/brands';
import Footer from '../../components/enterprise/containers/footer/Footer';

import 'bulma/css/bulma.css';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../assets/scss/index.scss';
import { HeaderNoSocial } from '../../components/header/HeaderNoSocial';

const IndexPage = () => (
  <div className="main-wrapper">
    <SeoMetaTags />
    <HeaderNoSocial />
    <div id="main-content">
      <Banner />
      <About />
      <Service2 />
      <Project />
      <Testimonial />
      <Contact />
      <Brand />
      <Footer />
    </div>
  </div>
);

export default IndexPage;
