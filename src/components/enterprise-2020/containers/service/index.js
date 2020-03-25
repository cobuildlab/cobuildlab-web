import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title';
import Button from '../../components/button';
import { Servicedata, Servicedata1 } from '../../../../assets/enterprise-2020/data/service';
import PreviewIcon from '../../components/icon';
import './service.scss';

/**
 *
 */
function Service() {
  return (
    <section className="service-wrapper" id="service">
      <Container>
        <Row>
          <Col lg={5} md={4}>
            <div className="service-content-1 main-title-wrapper">
              <Titlespan2 Class="sitemain-subtitle" Name="Business" Label="Solutions" />
              <Subtitle Class="site-subtitle2" Name="We Provide The" />
              <Title Class="service-title" Name="Our core features" />
              <Description
                Class="service-dec"
                Name="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot."
              />
              <Button
                Class="button1 btn button2 gradient-color"
                Name="Explore"
                BtnIcon="btn-icon"
              />
            </div>
          </Col>
          <Col lg={7} md={8} className="service-block-content">
            <Row>
              <Col sm={6} className="service-block1">
                {Servicedata.map((data, i) => (
                  <div className={`service-${i} service-content`} key={data.id}>
                    <div className="service-icon">
                      <span>
                        <PreviewIcon icon={data.Icon} />
                      </span>
                    </div>
                    <div className="service-content-dec">
                      <Title Class="service-title" Name={data.title} />
                      <Description Class="service-dec-content" Name={data.content} />
                    </div>
                  </div>
                ))}
              </Col>
              <Col sm={6} className="service-block2">
                {Servicedata1.map((data, i) => (
                  <div className={`service-${i} service-content`} key={data.id}>
                    <div className="service-icon">
                      <span>
                        <PreviewIcon icon={data.Icon} />
                      </span>
                    </div>
                    <div className="service-content-dec">
                      <Title Class="service-title" Name={data.title} />
                      <Description Class="service-dec-content" Name={data.content} />
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Service;
