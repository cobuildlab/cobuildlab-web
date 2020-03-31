import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title';
import PortfolioData from '../../../../assets/enterprise-2020/data/portfolio';
import './portfolio.scss';


const Portfolio = () => {
  return (
    <Section isMarginless>
      <div className="portfolio-wrapper" id="portfolio">
        <Container isFluid>
          <div className="main-title-wrapper">
            <Subtitle Class="site-subtitle" Name="Portfolio" />
            <Titlespan2 Class="sitemain-subtitle" Name="See Our" Label="Case Studies" />
            <Description
              Class="site-dec"
              Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
            />
          </div>
          <Columns isDisplay="flex" isMultiline>
            {PortfolioData.map((data, i) => (
              <Column isSize={{ mobile: 6, tablet: 4 }} key={data.id} >
                <div className={`portfolio-${i}`}>
                  <div className="portfolio-content">
                    <div className="portfolio-first-block">
                      <img src={data.img} alt="" title="" />
                      <div className="portfolio-hover">
                        <Title Class="portfolio-hover-title" Name={data.subtitle} />
                        <Description Class="portfolio-hover-dec" Name={data.subcontent} />
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
