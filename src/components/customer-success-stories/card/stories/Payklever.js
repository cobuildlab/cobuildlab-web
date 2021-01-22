import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import PropTypes from 'prop-types';

const Payklever = ({ title, description, to }) => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Payklever Campaign Manager'}
        description={
          'Payklever Campaign Manager With Payklever you can turn your car into a payment method. You can drive quietly and never handle your cash or…'
        }
        to={'/customer-success-stories/payklever-campaign-manager'}>
        <StaticImage src={'./../assets/images/customers/Payklever.jpg'} alt="" />
      </Card>
    </Column>
  );
};

Payklever.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Payklever;
