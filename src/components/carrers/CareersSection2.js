import React from 'react';
import { Column, Columns } from 'bloomer';
import ServicesContent from './../services/ServicesContent';
import ButtonCalendar from './ButtonCalendar';

const CareersSection2 = () => {
  return (
    <>
      <Columns isVCentered>
        <Column isSize={{ mobile: 12, desktop: 4 }} isOffset={{ mobile: 0, desktop: 4 }}>
          <ServicesContent>
            <ButtonCalendar title={'Agenda una Reunión'} />
          </ServicesContent>
        </Column>
      </Columns>
    </>
  );
};

export default CareersSection2;
