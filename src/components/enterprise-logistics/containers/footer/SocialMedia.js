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

const Icon = ({ icon, href, name }) => (
  <a target="_blank" href={href} rel="noreferrer noopener" aria-label={name}>
    <span>
      <PreviewIcon icon={icon} />
    </span>
  </a>
);

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const NewsLetterFormFooter = () => (
  <SocialWrapper>
    <IconContainer>
      <Icon icon={facebookSquare} name="Facebook" href="https://facebook.com/cobuildlab" />
    </IconContainer>
    <IconContainer>
      <Icon icon={twitterSquare} name="Twitter" href="https://twitter.com/cobuildlab" />
    </IconContainer>
    <IconContainer>
      <Icon icon={linkedinSquare} name="Linked In" href="https://linkedin.com/company/cobuildlab" />
    </IconContainer>
  </SocialWrapper>
);
export default NewsLetterFormFooter;
