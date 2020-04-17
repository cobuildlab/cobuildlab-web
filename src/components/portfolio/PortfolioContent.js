import React from 'react';
import { Columns, Column } from 'bloomer';
import H6 from '../Typography/H6';
import PortfolioDescription from './PortfolioDescription';
import PortfolioCategory from './PortfolioCategory';
import OtherProjects from './OtherProjects';

const PortfolioContent = () => {


  return (
    <Columns>
      <Column isSize={{ mobile: 12, desktop: 3 }}>
        <H6>Category</H6>
        <PortfolioCategory />
        <H6>More Projects</H6>
        <OtherProjects />
      </Column>
      <Column isSize={{ mobile: 12, desktop: 9 }}>
        <PortfolioDescription />
      </Column>
    </Columns>
  );
};


export default PortfolioContent;