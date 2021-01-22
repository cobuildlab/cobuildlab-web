import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import PropTypes from 'prop-types';

const Mama = ({ title, description, to }) => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Mama'}
        description={
          'The Match-Making app MAMA is a fun and easy-to-use connectivity tool that makes lightning-fast introductions.'
        }
        to={'/customer-success-stories/mama'}>
        <StaticImage src={'./../../../../assets/images/customers/mama.png'} alt="" />
      </Card>
    </Column>
  );
};

Mama.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Mama;
