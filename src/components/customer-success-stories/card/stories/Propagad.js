import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import PropTypes from 'prop-types';

const Propagad = ({ title, description, to }) => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Propagad'}
        description={
          'Propagad Contact Person:  Cesar Lang Location:  Miami, US Industry:  Marketing and Advertising Web Site:  www.propagad.com Introducing Cesar…'
        }
        to={'/customer-success-stories/propagad'}>
        <StaticImage src={'./../../../../assets/images/customers/Propagad.jpg'} alt="" />
      </Card>
    </Column>
  );
};

Propagad.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Propagad;
