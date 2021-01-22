import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import PropTypes from 'prop-types';

const Pitazo = ({ title, description, to }) => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'El Pitazo'}
        description={"El Pitazo is Venezuela's main independent news website."}
        to={'/customer-success-stories/el-pitazo'}>
        <StaticImage src={'./../assets/images/customers/pitazo.jpg'} alt="" />
      </Card>
    </Column>
  );
};

Pitazo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Pitazo;
