import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import { instagram } from 'react-icons-kit/fa/instagram';
import { twitter } from 'react-icons-kit/fa/twitter';
import { github } from 'react-icons-kit/fa/github';

const icons = {
  fabebook: facebook,
  instagram: instagram,
  twitter: twitter,
  github: github,
};

const IconContainer = styled.a`
  padding: 0 0.5rem;
  color: #264a60;
  transition: color 0.125s ease-in;
  &:hover {
    color: #e76c29;
  }
`;

const TeamSocialNetworks = ({ data }) => {
  const items = data.map((item, index) => (
    <IconContainer target="_blank" rel="nofollow noopener noreferrer" href={item.src} key={index}>
      <Icon size={24} icon={icons[item.name]} />
    </IconContainer>
  ));

  return <Fragment>{items}</Fragment>;
};

TeamSocialNetworks.defaultProps = {
  data: [],
};

TeamSocialNetworks.propTypes = {
  data: PropTypes.array,
};

export default TeamSocialNetworks;
