import React from 'react';
import Helmet from 'react-helmet';
import { HeroHeader, HeroBody, Hero, Section, Container, Columns, Column } from 'bloomer';

import Layout from '../../components/2020/Layout';
import Header from '../../components/2020/Header';
import Banner from '../../components/CustomerSuccessStories/Banner';
import Card from '../../components/CustomerSuccessStories/Card';

import data from '../../data/portfolio';

const siteTitle = 'Customer Success Stories - Miami Labs | Cobuild Lab';

const CustomerSuccessStories = () => {
  const items = data.map(({ img_not_logo, subtitle, subcontent }) => (
    <Column isSize={4} key={subtitle} isPaddingless>
      <Card title={subtitle} description={subcontent} image={img_not_logo} />
    </Column>
  ));

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: 'Success Cases for the Cobuild Lab in Miami' }]}
        title={siteTitle}
      />
      <Hero>
        <HeroHeader>
          <Header />
        </HeroHeader>
        <HeroBody>
          <Banner />
        </HeroBody>
      </Hero>
      <Section>
        <Container>
          <Columns isMultiline>{items}</Columns>
        </Container>
      </Section>
    </Layout>
  );
};

export default CustomerSuccessStories;
