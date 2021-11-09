import React from 'react';
import styled from 'styled-components';
import Card from '../card/Card';
import { Column, Columns } from 'bloomer';
import { mainStaff, staff } from '../staff';

const Container = styled.div`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

const TeamList = () => {
  // To determine when to display green and white backgrounds
  let isOdd = true;

  return (
    <Container>
      <Columns isMultiline isMarginless>
        {mainStaff.map((item, index) => (
          <Column key={index} isSize={{ mobile: 12, tablet: 3, desktop: 3 }} isPaddingless>
            <Card {...item}>{item.picture}</Card>
          </Column>
        ))}

        {staff.map((item, index) => {
          if ((index + 1) % 4 === 0) {
            isOdd = !isOdd;
          }

          return (
            <Column key={index} isSize={{ mobile: 12, tablet: 3, desktop: 3 }} isPaddingless>
              <Card {...item}>{index < 3 || isOdd ? item.whitePicture : item.greenPicture}</Card>
            </Column>
          );
        })}
      </Columns>
    </Container>
  );
};

export default TeamList;
