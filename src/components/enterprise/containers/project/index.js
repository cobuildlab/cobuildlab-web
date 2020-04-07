import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import CountUp from 'react-countup';
import Typography from '../../../2020/Typography';
import './project.scss';

const COUNTER_DATA = [
  {
    id: 1,
    number: 55,
    title: 'Clients',
  },
  {
    id: 2,
    number: 70,
    title: 'Projects',
  },
  {
    id: 3,
    number: 36,
    title: 'Team Experts',
  },
  {
    id: 4,
    number: 100,
    title: 'Repositories',
  },
];

const Project = () => {
  return (
    <Section isPaddingless id="project">
      <div className="project-wrapper gradient-color">
        <Container>
          <div className="project-content-wrapper">
            <Columns>
              {COUNTER_DATA.map((data, i) => (
                <Column isSize={{ mobile: 12, desktop: 3 }} key={data.id}>
                  <div className={`counter-${i} project-box-outer`}>
                    <div className="animated-bg">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <div className="counters">
                      <CountUp delay={3} end={data.number} className="counters-number"></CountUp>
                      <Typography className="counters-title" tag="h3">
                        {data.title}
                      </Typography>
                    </div>
                  </div>
                </Column>
              ))}
            </Columns>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Project;
