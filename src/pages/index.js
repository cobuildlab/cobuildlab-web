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
import '../assets/2021/scss/styles-text.scss';
import Header from '../components/header/Header';
import Typography from '../components/2020/Typography';
import { Video } from '../components/2021/containers/Video';
import { Banner } from '../components/2021/containers/Banner';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import IncubatorLink from '../components/enterprise/containers/incubator/Incubator';
import { About } from '../components/2021/containers/About';
import TextLink from '../components/Typography/TextLink';
import { StaticImage } from 'gatsby-plugin-image';
import { WhatsappButton } from '../components/WhatsappButton';
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
            We partner with Industry Experts to solve Logistical and Productivity problems with{' '}
            <TextLink to="https://www.cobuildlab.com/services/custom-software-development">
              Custom Software Solutions
            </TextLink>
            ,{' '}
            <TextLink to="https://www.cobuildlab.com/services/artificial-intelligence-development">
              {' '}
              Artificial Intelligence
            </TextLink>{' '}
            and <TextLink to="https://www.cobuildlab.com/services/iot-development">IOT</TextLink>.
          </Typography>
        }
      />
      <Video
        videoId={'5fbYxQNgJ7s'}
        text1={'For Small and Medium Sized Businesses'}
        text2={
          'At Cobuild Lab, we’ve been helping Business Owners, Managers, CTO’s, COO’s and IT leaders automate business processes with custom software solutions, artificial Intelligence models and IOT hardware.'
        }
        facade={
          <StaticImage
            alt={'Video'}
            src={'../assets/images/video/thumbnail_home_video.png'}
            style={{ width: '100%', minHeight: '390px' }}
          />
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
      <WhatsappButton />
    </div>
  </div>
);

export default IndexPage;
