import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { desktop } from 'react-icons-kit/fa/desktop';

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Item = styled.li`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #264a60;
  padding-top: 5px;
`;

const IconCaption = styled.span`
  padding-top: 5px;
`;

const IncubatorContent = () => (
  <Container>
    <List>
      <Item>
        <Icon icon={desktop} size={24} />
        <IconCaption>Serverless</IconCaption>
      </Item>
      <Item>
        <Icon icon={desktop} size={24} />
        <IconCaption>Serverless</IconCaption>
      </Item>
      <Item>
        <Icon icon={desktop} size={24} />
        <IconCaption>Serverless</IconCaption>
      </Item>
      <Item>
        <Icon icon={desktop} size={24} />
        <IconCaption>Serverless</IconCaption>
      </Item>
      <Item>
        <Icon icon={desktop} size={24} />
        <IconCaption>Serverless</IconCaption>
      </Item>
    </List>
  </Container>
);

export default IncubatorContent;
