import React from 'react';
import { Container, Hero, HeroHeader, Section } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';

import ReferralsProgram from '../components/referrals/ReferralsProgram';

const Referrals = () => (
  <Layout>
    <SeoMetaTags title="Services" description="Privacy Policy for the Cobuild Lab" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
    </Hero>
    <Section>
      <Container>
        <ReferralsProgram />
      </Container>
    </Section>
  </Layout>
);

export default Referrals;
