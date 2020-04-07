import React from 'react';
import { Container,  Section } from 'bloomer';
import Typography from '../../2020/Typography';
import Portfolio from '../../Portfolio/Portfolio';

const EnterprisePortfolio = () => {
  return (
    <Section isMarginless id="customer-success-stories">
      <div className="portfolio-wrapper" id="portfolio">
        <Container isFluid>
          <div className="main-title-wrapper">
            <div className="sub-title-wrapper">
              <Typography className="site-subtitle" tag="h2">
                Portfolio
              </Typography>
            </div>
            <Typography className="sitemain-subtitle" tag="h3">
              See Our <span className="enterprise-text-orange">Case Studies</span>
            </Typography>
            <Typography className="site-dec" tag="p">
              Learn from ideas created at Cobuild Lab.
            </Typography>
          </div>
          <Portfolio />
        </Container>
      </div>
    </Section>
  );
};

export default EnterprisePortfolio;
