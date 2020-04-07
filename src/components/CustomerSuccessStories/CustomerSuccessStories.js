// April 2020
// this is used in the new design dont delete
import React from 'react';
import { Columns, Column } from 'bloomer';
import styled from 'styled-components';
import Hover from './Hover';
import { Description } from './Hover';

import data from '../../data/portfolio';

const Container = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  border-radius: 5px;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: rgba(5, 6, 11, 0.5);
    transition: all 0.5s ease-in-out;
    opacity: 0.5;
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    opacity: 0.6;
    transition: all 0.5s ease-in-out;
    background-color: #f6f6fb;
  }
  &:hover {
    &:before {
      height: 100%;
      top: 0;
    }
    &:after {
      opacity: 0;
    }
    ${Description} {
      opacity: 1;
      height: 65px;
      margin-top: calc(8px + (15 - 8) * ((100vw - 320px) / (1920 - 320)));
    }
  }
  @media (min-width: 576px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const CustomerSuccessStories = () => {
  const items = data.map((data, i) => (
    <Column isSize={{ mobile: 6, tablet: 4 }} key={data.id}>
      <Container>
        <Wrapper>
          <Image src={data.img} alt="" title="" />
          <Hover title={data.subtitle} description={data.subcontent} />
        </Wrapper>
      </Container>
    </Column>
  ));

  return (
    <Columns isDisplay="flex" isMultiline>
      {' '}
      {items}
    </Columns>
  );
};

export default CustomerSuccessStories;
