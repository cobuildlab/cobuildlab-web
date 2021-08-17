import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as moment from 'moment';
import CareersCardContainer from './CareersCardContainer';
import CarrerCardTitle from './CareersCardTitle';

const CarrerContent = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
`;

const BlogPosition = styled.div`
  float: ${(props) => props.position};
  color: #264a60;
`;

const CareersCard = ({ title, src, to, description, readingTime, createdAt, tag }) => (
  <CareersCardContainer alt={title} src={src} to={to}>
    <CarrerCardTitle>{title}</CarrerCardTitle>
    <div>
      <CarrerContent>{description}</CarrerContent>
    </div>
    <div>
      <BlogPosition position={'left'}>{moment(createdAt).format('MM/DD/YYYY')}</BlogPosition>
      <BlogPosition position={'right'}>{readingTime}</BlogPosition>
    </div>
  </CareersCardContainer>
);

CareersCard.defaultProps = {
  readingTime: '3m',
  src: {},
  tag: [],
};

CareersCard.propTypes = {
  to: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  readingTime: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.object,
  tag: PropTypes.array,
};

export default CareersCard;
