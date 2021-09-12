import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { clockO } from 'react-icons-kit/fa/clockO';
import { mapPin } from 'react-icons-kit/fa/mapPin';
import { Icon } from 'react-icons-kit';

import CareersCardContainer from './CareersCardContainer';
import CareerCardTitle from './CareersCardTitle';

const BlogPosition = styled.div`
  float: ${(props) => props.position};
  color: #264a60;
  & a {
    color: #e76c29;
    font-weight: bold;
  }
`;

const CareersCard = ({ title, to, modality, time }) => (
  <CareersCardContainer alt={title}>
    <CareerCardTitle>{title}</CareerCardTitle>
    <div>
      <BlogPosition position={'left'}>
        <Icon icon={mapPin} alt="facebook-icon" size={22} />
        <span> {modality}</span>
      </BlogPosition>
      <BlogPosition position={'right'}>
        <Icon icon={clockO} alt="facebook-icon" size={22} />
        <span> {time}</span>
      </BlogPosition>
    </div>
    <div>
      <BlogPosition position={'right'}>
        <Link to={'/careers/' + to}>Read More</Link>
      </BlogPosition>
    </div>
  </CareersCardContainer>
);

CareersCard.defaultProps = {
  modality: 'Remote',
  time: 'Full Time',
};

CareersCard.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  modality: PropTypes.string,
  time: PropTypes.string,
};

export default CareersCard;
