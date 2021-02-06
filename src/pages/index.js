import React from 'react';
import { Service2 } from '../components/2021/containers/Service2';
import { CompetitiveAdvantage } from '../components/2021/containers/CompetitiveAdvantage';
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
import '../assets/2021/scss/2021.scss';
import Header from '../components/header/Header';
import Typography from '../components/2020/Typography';
import { Video } from '../components/2021/containers/Video';
import { Banner } from '../components/2021/containers/Banner';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import IncubatorLink from '../components/enterprise/containers/incubator/Incubator';
import { About } from '../components/2021/containers/About';

const title = {
  default: {
    level: 8,
    fontWeight: 'bold',
  },
  lg: {
    level: 6,
    fontWeight: 'bold',
  },
};

const IndexPage = () => (
  <div className="main-wrapper">
    <SeoMetaTags />
    <Header />
    <div id="main-content">
      <Banner
        title1={
          <Typography tag="h2" className="sitemain-subtitle">
            A SOFTWARE DEVELOPMENT COMPANY
          </Typography>
        }
        title2={
          <Typography size={title} tag="h2">
            We partner with <span className="enterprise-text-orange">Industry Experts</span> to
            solve Logistics and Productivity problems with{' '}
            <span className="enterprise-text-orange">Custom Software Solutions.</span>
          </Typography>
        }
      />
      <Video
        videoId={'5fbYxQNgJ7s'}
        text1={'For Small and Medium Sized Businesses'}
        text2={
          'At Cobuild Lab, we’ve been helping business owners, Managers, CTO’s, COO’s and IT leaders automate business processes custom software solutions.'
        }
      />
      <Service2 />
      <CompetitiveAdvantage />
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Brand />
      <IncubatorLink />
      <Footer />
    </div>
  </div>
);

export default IndexPage;
