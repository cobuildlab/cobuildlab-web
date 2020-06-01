import React, { PureComponent } from 'react';
import { HeroHeader, HeroBody, Hero, Section } from 'bloomer';
import Layout from '../../components/2020/Layout';
import Header from '../../components/2020/header/Header';
import HeroBodyContent from '../../components/2020/Hero';
import Service from '../../components/2020/service/Service';
import Value from '../../components/2020/value/Value';
import HomePageCustomerSuccessStories from '../../components/2020/HomePageCustomerSuccessStories';
import OurTeam from '../../components/2020/our-team/OurTeam';
import Contact from '../../components/2020/HomePageContact';
import TestimonialHomePage from '../../components/2020/TestimonialHomePage';
import HomePagePost from '../../components/2020/HomePagePost';
import SeoMetaTags from '../../components/SeoMetaTags';
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
    return (
      <Layout>
        <SeoMetaTags />
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
          <Value />
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
          <HomePagePost />
        </Section>
        <Section>
          <Contact />
        </Section>
      </Layout>
    );
  }
}
