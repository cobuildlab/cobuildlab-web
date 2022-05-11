import React from 'react';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import { Container } from 'bloomer';
import 'bulma/css/bulma.css';
import Theme from '../components/2022/theme/Theme';
import Header from '../components/2022/headers/Header';
import HomeBanner from '../components/2022/home/HomeBanner';
import Introduction from '../components/2022/home/Introduction';
import HomeHero from '../components/2022/home/HomeHero';
import Footer from '../components/2022/footers/Footer';

const Home = () => (
  <Theme>
    <SeoMetaTags lang="en" />
    <Header />
    <Container>
      <HomeHero />
      <Introduction />
      <HomeBanner />
      <Footer />
    </Container>
  </Theme>
);

export default Home;
