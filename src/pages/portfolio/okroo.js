import React from 'react';
import Helmet from 'react-helmet';
import { Container, Columns, Column, HeroHeader, HeroBody, Hero, Section } from 'bloomer';
import styled from 'styled-components';

import Layout from '../../components/2020/Layout';
import Header from '../../components/2020/Header';
import BannerBackground from '../../components/2020/BannerBackground';

import HeroTitle from '../../components/portfolio/HeroTitle';
import H6 from '../../components/Typography/H6';
import PortfolioDescription from '../../components/portfolio/PortfolioDescription';
import OtherProjects from '../../components/portfolio/OtherProjects';
import PortfolioCarousel, { CarouselItem } from '../../components/portfolio/PortfolioCarousel';


import img1 from '../../assets/images/portfolio/details/okree/1.png';
import img2 from '../../assets/images/portfolio/details/okree/2.png';
import img3 from '../../assets/images/portfolio/details/okree/3.png';
import img4 from '../../assets/images/portfolio/details/okree/4.png';
import img5 from '../../assets/images/portfolio/details/okree/5.png';


const siteTitle = 'Portfolio | Cobuild Lab';

const Wrapper = styled.div`
  position: relative;
`;

const Portfolio = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: 'Okroo Portfolio' }]}
      title={siteTitle}
    />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
      <HeroBody>
        <Wrapper>
          <BannerBackground />
          <Container>
            <HeroTitle />
          </Container>
        </Wrapper>
      </HeroBody>
      <Section isPaddingless>
        <Container>
          <Columns>
            <Column isSize={{ mobile: 12, desktop: 3 }}>
              <H6>More Projects</H6>
              <OtherProjects current="Okroo" />
            </Column>
            <Column isSize={{ mobile: 12, desktop: 9 }}>
              <PortfolioDescription title="Okroo" />
              <PortfolioCarousel>
                <CarouselItem>
                  <img src={img1} alt="okree app" />   
                </CarouselItem>  
                <CarouselItem>
                  <img src={img2} alt="okree app" />   
                </CarouselItem>
                <CarouselItem>
                  <img src={img3} alt="okree app" />   
                </CarouselItem>
                <CarouselItem>
                  <img src={img4} alt="okree app" />   
                </CarouselItem>
                <CarouselItem>
                  <img src={img5} alt="okree app" />   
                </CarouselItem>
              </PortfolioCarousel>
            </Column> 
          </Columns>
        </Container>
      </Section>
    </Hero>
  </Layout>
);

export default Portfolio;
