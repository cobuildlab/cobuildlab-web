// April 2020
// this is used in the new design dont delete
import React from 'react';
import PropTypes from 'prop-types';
import { Columns, Column } from 'bloomer';
import Card from './Card';

import data from '../../data/customer-success-stories-data';

/**
 * @param {number} numberOfItems -Number of items for render, check data length.
 * @returns {import('react').ReactChildren} -React children.
 */
const CustomerSuccessStories = ({ numberOfItems }) => {
  const newData = data.slice(0, numberOfItems < data.length ? numberOfItems : 6);
  const items = newData.map(({ title, img, description, slug }) => (
    <Column isSize={{ mobile: 12, tablet: 4 }} key={title} isPaddingless>
      <Card title={title} description={description} image={img} to={slug} />
    </Column>
  ));

  return (
    <Columns isDisplay="flex" isMultiline>
      {items}
    </Columns>
  );
};

CustomerSuccessStories.defaultProps = {
  numberOfItems: 6,
};

CustomerSuccessStories.propTypes = {
  numberOfItems: PropTypes.number,
};

export default CustomerSuccessStories;
