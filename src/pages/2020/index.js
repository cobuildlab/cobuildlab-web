import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { HeroHeader, HeroBody, Hero, Section } from 'bloomer';

import Layout from '../../components/2020/Layout';
import Header from '../../components/2020/Header';
import HeroBodyContent from '../../components/2020/Hero';
import Service from '../../components/2020/Service';
import BusinessValue from '../../components/2020/BusinessValue';
import HomePagePortfolio from '../../components/2020/HomePagePortfolio';
import OurTeam from '../../components/2020/OurTeam';
import Contact from '../../components/2020/Contact';
import Newsletter from '../../components/2020/NewsLetter';

import 'react-toastify/dist/ReactToastify.min.css';
import 'react-modal-video/scss/modal-video.scss';
import 'bulma';

export default class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showVideoModal: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      showVideoModal: true,
    });
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');
    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Hero>
          <HeroHeader>
            <Header />
          </HeroHeader>
          <HeroBody>
            <HeroBodyContent />
          </HeroBody>
        </Hero>
        <Section>
          <Service />
        </Section>
        <Section>
          <BusinessValue />
        </Section>
        <Section className="section-not-padding">
          <HomePagePortfolio />
        </Section>
        <Section className="section-not-padding">
          <OurTeam />
        </Section>
        <Section>
          <Contact />
        </Section>
        <Section className="section-bg-white">
          <Newsletter />
        </Section>
      </Layout>
    );
  }
}
