import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { HeroHeader, HeroBody, Hero, Section } from 'bloomer';
import Layout from '../../components/2020/Layout';
import Header from '../../components/2020/Header';
import HeroBodyContent from '../../components/2020/Hero';
import Service from '../../components/2020/Service';
import BusinessValue from '../../components/2020/BusinessValue';
import HomePageCustomerSuccessStories from '../../components/2020/HomePageCustomerSuccessStories';
import OurTeam from '../../components/2020/OurTeam';
import Contact from '../../components/2020/HomePageContact';
import TestimonialHomePage from '../../components/2020/TestimonialHomePage';
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
        <Section>
          <HomePageCustomerSuccessStories />
        </Section>
        <Section isPaddingless>
          <OurTeam />
        </Section>
        <Section isPaddingless>
          <TestimonialHomePage />
        </Section>
        <Section>
          <Contact />
        </Section>
      </Layout>
    );
  }
}
