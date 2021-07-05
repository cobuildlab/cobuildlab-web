import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { mobilePhone } from 'react-icons-kit/fa/mobilePhone';
import { desktop } from 'react-icons-kit/fa/desktop';

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-widht: 768px) {
    justify-content: center;
  }
`;

const Type = styled.li`
  display: flex;
  align-items: center;
  color: ${({ isActive }) => (isActive ? '#E76C29' : '#90A2AD')};
`;

const TextContainer = styled.span`
  color: inherit;
  padding-left: 0.5em;
`;

const IconContainer = styled(Icon)`
  color: inherit;
`;

/**.
 *  Project Type component
 *
 * @param type.type
 * @param {Array} type - The type of project
 * @returns {JSX.Element} - The component
 * @constructor
 */
const ProjectType = ({ type }) => {
  const isWeb = type.includes('web');
  const isApp = type.includes('app');

  return (
    <Container>
      <Type isActive={isWeb}>
        <IconContainer icon={desktop} size={22} />
        <TextContainer>Web</TextContainer>
      </Type>
      <Type isActive={isApp}>
        <IconContainer icon={mobilePhone} size={28} />
        <TextContainer>App</TextContainer>
      </Type>
    </Container>
  );
};

ProjectType.defaultProps = {
  type: ['app'],
};

ProjectType.propTypes = {
  type: PropTypes.arrayOf(PropTypes.oneOf(['web', 'app'])),
};

export default ProjectType;
