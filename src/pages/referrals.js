import React from 'react';
// import { Column, Columns, Container, Hero, HeroHeader, Section } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../components/2020/Layout';
// import Header from '../components/header/Header';
// import ReferralsProgram from '../components/referrals/ReferralsProgram';

import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import { ReferralsHero } from '../components/referrals/ReferralsHero';
// import { StaticImage } from 'gatsby-plugin-image';
// import Title5 from '../components/Title5';
// import Paragraph from '../components/Typography/Paragraph';
// import styled from 'styled-components';
// import colors from '../components/2021/colors.json';
// import H6 from '../components/Typography/H6';

const Referrals = () => (
  <Layout>
    <SeoMetaTags title="Referrals" description="Referrals programs at Cobuild Lab" />
    {/* <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
    </Hero> */}
    <ReferralsHero />
  </Layout>
);

export default Referrals;
