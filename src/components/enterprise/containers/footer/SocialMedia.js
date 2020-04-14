import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { facebookSquare, twitterSquare, linkedinSquare } from 'react-icons-kit/fa';
import PreviewIcon from '../../components/icon';

const SocialWrapper = styled.ul`
  display: flex;
`;

const IconContainer = styled.li`
  margin-right: 1em;
  & a {
    color: #fff;
  }
`;

const Icon = ({ icon, href }) => (
  <a target="_blank" href={href} rel="noreferrer noopener">
    <span>
      <PreviewIcon icon={icon} />
    </span>
  </a>
);

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
};

const NewsLetterFormFooter = () => (
  <SocialWrapper>
    <IconContainer>
      <Icon icon={facebookSquare} href="https://facebook.com/cobuildlab" />
    </IconContainer>
    <IconContainer>
      <Icon icon={twitterSquare} href="https://twitter.com/cobuildlab" />
    </IconContainer>
    <IconContainer>
      <Icon icon={linkedinSquare} href="https://linkedin.com/company/cobuildlab" />
    </IconContainer>
  </SocialWrapper>
);
export default NewsLetterFormFooter;
