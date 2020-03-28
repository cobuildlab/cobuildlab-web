import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import { Title } from '../../components/title';
import CountUp from 'react-countup';
import Counterdata from '../../../../data/project';
import './project.scss';


const Project = () => {
  return (
    <section className="project-wrapper gradient-color" id="project">
      <Container>
        <div className="project-content-wrapper">
          <Columns>
            {Counterdata.map((data, i) => (
              <Column isSize={{ mobile: 12, desktop: 3 }} key={data.id}>
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
              </Column>
            ))}
          </Columns>
        </div>
      </Container>
    </section>
  );
};

export default Project;
