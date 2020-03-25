import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title';
import PortfolioData from '../../../../data/portfolio';
import './portfolio.scss';

/**
 *
 */
function Portfolio() {
  return (
    <section className="portfolio-wrapper" id="portfolio">
      <Container>
        <div className="main-title-wrapper">
          <Subtitle Class="site-subtitle" Name="Portfolio" />
          <Titlespan2 Class="sitemain-subtitle" Name="See Our" Label="Case Studies" />
          <Description
            Class="site-dec"
            Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          />
        </div>
        <Row>
          {PortfolioData.map((data, i) => (
            <Col lg={4} sm={6} key={data.id} className={`portfolio-${i}`}>
              <div className="portfolio-content">
                <div className="portfolio-first-block">
                  <img src={data.img} alt="" title="" />
                  <div className="portfolio-hover">
                    <Title Class="portfolio-hover-title" Name={data.subtitle} />
                    <Description Class="portfolio-hover-dec" Name={data.subcontent} />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
