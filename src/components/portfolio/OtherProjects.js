import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Tag = styled.li`
  display: inline;
  padding: 0.25em 2.5em;
  border: ${({ isActive }) => (isActive ? 'none' : ' 1px solid #406073')};
  font-weight: bold;
  font-size: 18px;
  color: #${({ isActive }) => (isActive ? 'fff' : '406073')};
  text-align: center;
  margin-bottom: 0.5em;
  background-color: ${({ isActive }) => (isActive ? '#E76C29' : 'transparent')};
  box-shadow: ${({ isActive }) => (isActive ? '0px 8px 25px #E76C2999' : 'none')};
`;

const Container = styled.ul`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5em;
  margin-bottom: 2.5em;
`;

/**
 *
 * @property {string} - Type enum -> web | web/app | app.
 */

const data = ['Okroo', 'Balz', 'TuVueloVip', 'other'];

const OtherProject = ({ current }) => (
  <Container>
    {data.map((e)=>(
      <Tag isActive={current === e}>{e}</Tag>
    ))}
  </Container>
);

OtherProject.defaultProps = {
  current: '',
};

OtherProject.propTypes = {
  current: PropTypes.oneOf(['web', 'web/app', 'app']),
};
export default OtherProject;
