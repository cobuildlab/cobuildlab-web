import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H6 from '../Typography/H6';

const TagStyle = styled.div`
  background-color: ${({ active }) => (active ? '#e76c29' : 'transparent')};
  height: 50px;
  line-height: ${({ multipleLine }) => (multipleLine ? '23px' : '50px')};
  text-align: center;
  border: 1px solid ${({ active }) => (active ? '#e76c29' : '#264a60')};
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  & > span {
    color: ${({ active }) => (active ? '#fff' : '#264a60')};
    font-weight: 600;
  }
`;

const ServicesTag = ({ tag, activeTag }) => {
  return (
    <>
      <H6>Services</H6>
      <div>
        <TagStyle active={tag === 'customSoftware'} onClick={() => activeTag('customSoftware')}>
          <span>Custom Software</span>
        </TagStyle>
        <TagStyle
          multipleLine={true}
          active={tag === 'enterprisesDevelopment'}
          onClick={() => activeTag('enterprisesDevelopment')}>
          <span>Enterprises Development</span>
        </TagStyle>
        <TagStyle
          active={tag === 'softwareDevelopment'}
          onClick={() => activeTag('softwareDevelopment')}>
          <span>Software Development</span>
        </TagStyle>
        <TagStyle active={tag === 'startup'} onClick={() => activeTag('startup')}>
          <span>Startup</span>
        </TagStyle>
      </div>
    </>
  );
};

ServicesTag.propTypes = {
  tag: PropTypes.string.isRequired,
  activeTag: PropTypes.func.isRequired,
};

export default ServicesTag;
