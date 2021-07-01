import React from 'react';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import Navbar from '../components/enterprise/containers/navbar';
import Banner from '../components/enterprise/containers/banner';
import IncubatorLink from '../components/enterprise/containers/incubator/Incubator';
import Service from '../components/enterprise/containers/service';
import { CompetitiveAdvantage } from '../components/2021/containers/CompetitiveAdvantage';
import UniqueValueProps from '../components/enterprise/containers/unique-value-props';
import Video from '../components/enterprise/containers/video';
import Skills from '../components/enterprise/containers/skills';
import OurTeamEnterpriseSection from '../components/enterprise/containers/OurTeamEnterpriseSection';
import Project from '../components/enterprise/containers/project';
import EnterpriseCustomerSuccessStories from '../components/enterprise/containers/EnterpriseCustomerSuccessStories';
import Testimonial from '../components/enterprise/containers/testimonial/Testimonial';
import Contact from '../components/enterprise/containers/contact/ContactEnterprise';
import Brand from '../components/enterprise/containers/brands';
import Footer from '../components/enterprise/containers/footer/Footer';
import EnterpriseRecentPost from '../components/enterprise/containers/EnterpriseRecentPost';

import 'bulma/css/bulma.css';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import '../assets/scss/index.scss';

const IndexPage = () => (
  <div className="main-wrapper">
    <SeoMetaTags />
    <Navbar />
    <div id="main-content">
      <Banner />
      <Service />
      <IncubatorLink />
      <CompetitiveAdvantage />
      <UniqueValueProps />
      <Video />
      <Skills />
      <Project />
      <EnterpriseCustomerSuccessStories />
      <Testimonial />
      <OurTeamEnterpriseSection />
      <Contact />
      <EnterpriseRecentPost />
      <Brand />
      <Footer />
    </div>
  </div>
);

export default IndexPage;
