import React, { Fragment } from 'react';
import { Media, MediaLeft, MediaContent, Column, Columns } from 'bloomer';
import styled from 'styled-components';
import logo from '../../resources/weedmatch.png';

const StudySubtitle = styled.h2`
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
`;

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
      <StudySubtitle className="study-subtitle">
        Metrics:
      </StudySubtitle>
      <Columns className="study-case-metrics">
        <Column className="study-subtext has-text-centered">
          Time to Market
          <br />
          <span className="study-number has-text-centered">4 Months</span>
        </Column>
        <Column className="study-subtext has-text-centered">
          New Users
          <br />
          <span className="study-number has-text-centered">4000</span>
        </Column>
        <Column className="study-subtext has-text-centered">
          Daily Active Users
          <br />
          <span className="study-number">500</span>
        </Column>
      </Columns>
    </Fragment>
  );
};

export default StudyCase;