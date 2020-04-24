import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tag = styled.li`
  display: inline;
  padding: 0.25em 2.5em;
  border: ${({ isActive }) => (isActive ? '1px solid #E76C29' : '1px solid #406073')};
  font-weight: bold;
  font-size: 18px;
  color: #${({ isActive }) => (isActive ? 'fff' : '406073')};
  text-align: center;
  margin-bottom: 0.5em;
  background-color: ${({ isActive }) => (isActive ? '#E76C29' : 'transparent')};
  box-shadow: ${({ isActive }) => (isActive ? '0px 8px 25px #E76C2999' : 'none')};
`;

const Container = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
  margin-bottom: 2.5em;
`;

/**
 *
 * @property {string} - Type enum -> web | web/app | app.
 */

const PortfolioCategory = ({ type }) => (
  <Container>
    <Tag isActive={type === 'web'}>Web</Tag>
    <Tag isActive={type === 'web/app'}>Web/App</Tag>
    <Tag isActive={type === 'app'}>App</Tag>
  </Container>
);

PortfolioCategory.defaultProps = {
  type: 'app',
};

PortfolioCategory.propTypes = {
  type: PropTypes.oneOf(['web', 'web/app', 'app']),
};

export default PortfolioCategory;
