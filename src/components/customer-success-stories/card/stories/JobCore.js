import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import PropTypes from 'prop-types';

const JobCore = ({ title, description, to }) => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Jobcore'}
        description={
          'Get work fast and get paid the same day with Jobcore. This is a web platform that allows employers to post job applications for candidates…'
        }
        to={'/customer-success-stories/jobcore'}>
        <StaticImage src={'./../../../../assets/images/customers/jobcore.jpg'} alt="" />
      </Card>
    </Column>
  );
};

JobCore.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default JobCore;
