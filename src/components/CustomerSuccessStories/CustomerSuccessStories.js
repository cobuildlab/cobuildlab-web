// April 2020
// this is used in the new design dont delete
import React from 'react';
import { Columns, Column } from 'bloomer';
import Card from './Card';

import data from '../../data/customer-success-stories-data';

const CustomerSuccessStories = () => {
  const items = data.map(({ title, img, description }) => (
    <Column isSize={{ mobile: 12, tablet: 4 }} key={title} isPaddingless>
      <Card title={title} description={description} image={img} />
    </Column>
  ));

  return (
    <Columns isDisplay="flex" isMultiline>
      {items}
    </Columns>
  );
};

export default CustomerSuccessStories;
