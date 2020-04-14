import React, { Fragment } from 'react';
import { Media, MediaLeft, MediaContent, Column, Columns } from 'bloomer';
import '../enterprise/containers/project/project.scss';
import styled from 'styled-components';
import logo from '../../assets/images/customers/jobcore.jpg';
import CountUp from 'react-countup';
import Typography from './Typography';
import { H3Blue } from '../text/H3Blue';

const STUDY_DATA = [
  {
    id: 1,
    title: 'Time to Market',
    number: 6,
    time: 'Months',
  },
  {
    id: 2,
    title: 'New Users',
    number: 800,
  },
  {
    id: 3,
    title: 'Daily Active Users',
    number: 50,
  },
];

const StudySubtitle = styled.h2`
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
`;

const StudyTime = styled.span`
  display: block;
  margin-bottom: 0.7rem;
`;

const StyledColumns = styled(Columns)`
  padding: 0px;
`;

const StudyCase = () => {
  const text =
    'Jobcore is a Job Marketplace and a Employees management platform to select the best talent for your needs, plan their shifts and schedules, monitor their work, pay their fees and provide feedback to the community.';

  return (
    <Fragment>
      <Media className="component-changes">
        <MediaLeft>
          <img alt={'Logo'} src={logo} width={500} height={500} />
        </MediaLeft>
        <MediaContent>
          <H3Blue>Jobcore</H3Blue>
          <p className="study-text">{text}</p>
        </MediaContent>
      </Media>
      <StudySubtitle className="study-subtitle">Metrics:</StudySubtitle>
      <StyledColumns className="project-wrapper" isVCentered>
        {STUDY_DATA.map((data, i) => (
          <Column className="is-4-desktop" key={i}>
            <div className={`counter-${i} project-box-outer`}>
              <div className="animated-bg">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className="counters">
                <CountUp delay={3} end={data.number} className="counters-number" />
                <StudyTime>{data.time}</StudyTime>
                <Typography className="counters-title" tag="h3">
                  {data.title}
                </Typography>
              </div>
            </div>
          </Column>
        ))}
      </StyledColumns>
    </Fragment>
  );
};

export default StudyCase;
