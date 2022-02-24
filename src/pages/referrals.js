import React from 'react';
import { Hero, HeroHeader } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';

import { SeoMetaTags } from '../components/2021/SeoMetaTags';
import { ReferralsHero } from '../components/referrals/ReferralsHero';
import { ReferralBenefits } from '../components/referrals/ReferralBenefits';
import ReferralsProgram from '../components/referrals/ReferralsProgram';

const Referrals = () => (
  <Layout>
    <SeoMetaTags title="Referrals" description="Referrals programs at Cobuild Lab" />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
    </Hero>
    <ReferralsHero />
    <ReferralBenefits />
    <ReferralsProgram />
  </Layout>
);

export default Referrals;
