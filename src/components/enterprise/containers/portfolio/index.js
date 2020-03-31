import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import PortfolioData from '../../../../data/portfolio';
import Typography from '../../../2020/Typography';
import './portfolio.scss';


const Portfolio = () => {
  return (
    <Section isMarginless>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            </Typography>
          </div>
          <Columns isDisplay="flex" isMultiline>
            {PortfolioData.map((data, i) => (
              <Column isSize={{ mobile: 6, tablet: 4 }} key={data.id} >
                <div className={`portfolio-${i}`}>
                  <div className="portfolio-content">
                    <div className="portfolio-first-block">
                      <img src={data.img} alt="" title="" />
                      <div className="portfolio-hover">
                        <Typography className="portfolio-hover-title" tag="h6">
                          {data.subtitle}
                        </Typography>
                        <Typography className="portfolio-hover-dec" tag="p">
                          {data.subcontent}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </Column>
            ))}
          </Columns>
        </Container>
      </div>
    </Section>
  );
};

export default Portfolio;
