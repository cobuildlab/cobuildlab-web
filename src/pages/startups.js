import React from 'react';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import { Service } from '../components/2021/containers/Service';
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
import Header from '../components/header/Header';
import Typography from '../components/2020/Typography';
import { Banner } from '../components/2021/containers/Banner';

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
            We partner with <span className="enterprise-text-orange">Entrepreneurs</span> and{' '}
            <span className="enterprise-text-orange">Industry Experts</span> to transform ideas into
            Web and Mobile Custom Software Solutions.
          </Typography>
        }
      />
      <CompetitiveAdvantage />
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
