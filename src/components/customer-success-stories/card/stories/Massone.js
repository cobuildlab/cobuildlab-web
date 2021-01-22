import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import PropTypes from 'prop-types';

const Massone = ({ title, description, to }) => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Massone'}
        description={
          'Massone Mechanical Massone Mechanical offers maintenance and installation services to commercial refrigeration companies. Offering high…'
        }
        to={'/customer-success-stories/massone'}>
        <StaticImage src={'./../assets/images/customers/Massone.jpg'} alt="" />
      </Card>
    </Column>
  );
};

Massone.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Massone;
