import React, { Fragment } from 'react';
import { Media, MediaLeft, MediaContent, Column, Columns } from 'bloomer';
import '../enterprise/containers/project/project.scss';
import styled from 'styled-components';
import logo from '../../resources/weedmatch.png';
import CountUp from 'react-countup';
import Typography from './Typography';

const STUDY_DATA = [
  {
    id: 1,
    title: 'Time to Market',
    number: 4,
    time: 'Months',
  },
  {
    id: 2,
    title: 'New Users',
    number: 4000
  },
  {
    id: 3,
    title: 'Daily Active Users',
    number: 500
  }
];

const StudySubtitle = styled.h2`
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
`;

const StudyTime = styled.span`
  display: block;
  margin-bottom: .7rem;
`;

const StyledColumns = styled(Columns)`
  padding: 0px;
`

const StudyCase = () => {
  const text =
    'Weedmatch is a social platform to get you closer to other cannabis lovers in an unique experience. This social network connects you with events and news around the cannabis culture';

  return (
    <Fragment>
      <Media className="component-changes">
        <MediaLeft
          className="study-logo"
          style={{
            backgroundImage: `url(${logo})`,
          }}
        />
        <MediaContent>
          <p className="study-text">{text}</p>
        </MediaContent>
      </Media>
      <StudySubtitle className="study-subtitle">Metrics:</StudySubtitle>
      <StyledColumns className="project-wrapper" isVCentered>
        {STUDY_DATA.map((data, i) => (
          <Column className="is-4-desktop">
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
