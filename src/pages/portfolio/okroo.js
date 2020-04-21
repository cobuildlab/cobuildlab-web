import React from 'react';
import Helmet from 'react-helmet';
import { Container, HeroHeader, HeroBody, Hero } from 'bloomer';
import styled from 'styled-components';

import Layout from '../../components/2020/Layout';
import BannerBackground from '../../components/2020/BannerBackground';

import HeroTitle from '../../components/portfolio/HeroTitle';
import PortfolioHeader from '../../components/portfolio/PortfolioHeader';
import PortfolioSection from '../../components/portfolio/PortfolioSection';
import ProjectTitle from '../../components/portfolio/ProjectTitle';

import PortfolioCarousel, { CarouselItem } from '../../components/portfolio/PortfolioCarousel';

import img2 from '../../assets/images/portfolio/details/okree/2.png';
import img3 from '../../assets/images/portfolio/details/okree/3.png';
import img4 from '../../assets/images/portfolio/details/okree/4.png';
import img5 from '../../assets/images/portfolio/details/okree/5.png';

const siteTitle = 'Portfolio | Cobuild Lab';

const Wrapper = styled.div`
  position: relative;
  padding-top: 6em;
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
        <PortfolioHeader />
      </HeroHeader>
      <HeroBody isPaddingless>
        <Wrapper>
          <BannerBackground />
          <Container>
            <HeroTitle />
          </Container>
        </Wrapper>
      </HeroBody>
      <PortfolioSection id="okroo-test-1">
        <Container>
          <ProjectTitle>Okroo</ProjectTitle>
          <PortfolioCarousel>
            <CarouselItem>
              <img src={img2} alt="carousel" />
            </CarouselItem>
            <CarouselItem>
              <img src={img3} alt="carousel" />
            </CarouselItem>
            <CarouselItem>
              <img src={img4} alt="carousel" />
            </CarouselItem>
            <CarouselItem>
              <img src={img5} alt="carousel" />
            </CarouselItem>
          </PortfolioCarousel>
        </Container>
      </PortfolioSection>
      <PortfolioSection id="okroo-test-2" color="white">
        <Container>
          <ProjectTitle>Okroo</ProjectTitle>
          <PortfolioCarousel>
            <CarouselItem>
              <img src={img2} alt="carousel" />
            </CarouselItem>
            <CarouselItem>
              <img src={img3} alt="carousel" />
            </CarouselItem>
            <CarouselItem>
              <img src={img4} alt="carousel" />
            </CarouselItem>
            <CarouselItem>
              <img src={img5} alt="carousel" />
            </CarouselItem>
          </PortfolioCarousel>
        </Container>
      </PortfolioSection>
    </Hero>
  </Layout>
);

export default Portfolio;
