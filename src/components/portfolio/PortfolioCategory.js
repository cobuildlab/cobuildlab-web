import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tag = styled.li`
  display: inline;
  padding: 0 2em;
  border: ${({ isActive }) => (isActive ? '1px solid #E76C29' : '1px solid #406073')};
  font-weight: bold;
  font-size: 16px;
  color: #${({ isActive }) => (isActive ? 'fff' : '406073')};
  text-align: center;
  background-color: ${({ isActive }) => (isActive ? '#E76C29' : 'transparent')};
  border-radius: 3px;
  margin: 0.5em 1em;
  max-height: 2em;
  @media screen and (max-width: 768px) {
    margin: 0.5em;
  }
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
