import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.li`
  display: inline;
  padding: 0.25em 0;
  font-weight: bold;
  font-size: ${({ current }) => (current ? '18px' : '16px')};
  color: #406073;
  margin-bottom: 0.5em;
  cursor: pointer;
  font-weight: ${({ current }) => (current ? 'bold' : 'lighter')};
`;

const Container = styled.ul`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5em;
`;

const data = ['Okroo', 'Balz', 'TuVueloVip', 'other'];

const OtherProjects = ({ current }) => (
  <Container>
    {data.map((e) => (
      <List current={current === e} key={e}>
        {e}
      </List>
    ))}
  </Container>
);

OtherProjects.defaultProps = {
  current: '',
};

OtherProjects.propTypes = {
  current: PropTypes.string,
};

export default OtherProjects;
