import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {mobilePhone} from 'react-icons-kit/fa/mobilePhone';
import {desktop} from 'react-icons-kit/fa/desktop';

const Container = styled.ul`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   margin-bottom: 2.5em;
`;

const Type = styled.li`
   display: flex;
   align-items: center;
   padding: 0 1em;
   color: ${( { isActive }) => isActive ? '#E76C29' : '#264A60'};
`;

const TextContainer = styled.span`
   color: inherit;
   padding: 0 .5em;
`;

const IconContainer = styled(Icon)`
  color: inherit;
`;  

/**
 *
 * @property {Array} - Type enum -> web | app.
 */

const ProjectType = ({ type }) => {

  const isWeb = type.includes('web');
  const isApp = type.includes('app');

  return(
    <Container>
      <Type isActive={isWeb} >
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
  type: PropTypes.arrayOf(PropTypes.oneOf(['web','app'])),
};

export default ProjectType;
