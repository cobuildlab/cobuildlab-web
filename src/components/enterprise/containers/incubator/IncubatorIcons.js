import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { database } from 'react-icons-kit/fa/database';
import { shield } from 'react-icons-kit/fa/shield';
import { group } from 'react-icons-kit/fa/group';
import { ribbonB } from 'react-icons-kit/ionicons/ribbonB';

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
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
        <Icon icon={database} size={24} />
        <IconCaption>Serverless</IconCaption>
      </Item>
      <Item>
        <Icon icon={ribbonB} size={24} />
        <IconCaption>24/7</IconCaption>
      </Item>
      <Item>
        <Icon icon={group} size={24} />
        <IconCaption>Team</IconCaption>
      </Item>
      <Item>
        <Icon icon={shield} size={24} />
        <IconCaption>Security</IconCaption>
      </Item>
    </List>
  </Container>
);

export default IncubatorContent;
