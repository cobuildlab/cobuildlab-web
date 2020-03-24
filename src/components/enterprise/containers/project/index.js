import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Title } from '../../components/title';
import CountUp from 'react-countup';
import Counterdata from '../../../../data/project';
import './project.scss';

/**
 *
 */
function Project() {
  return (
    <section className="project-wrapper gradient-color" id="project">
      <Container>
        <div className="project-content-wrapper">
          <Row>
            {Counterdata.map((data, i) => (
              <Col md={3} sm={6} key={data.id}>
                <div className={`counter-${i} project-box-outer`}>
                  <div className="animated-bg">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <div className="counters">
                    <CountUp delay={3} end={data.number} className="counters-number"></CountUp>
                    <Title Class="counters-title" Name={data.title} />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Project;
