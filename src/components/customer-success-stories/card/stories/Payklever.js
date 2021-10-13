import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const Payklever = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/payklever-campaign-manager'}>
        <Card
          title={'Payklever Campaign Manager'}
          description={
            <>
              <p>
                An innovative <b>hands-free payment method</b> that uses RFID technology to allow
                users to pay at parking lots, drive-thrus, and gas stations while driving.
              </p>
              <span>
                <b>Payments | Application</b>
              </span>
            </>
          }>
          <StaticImage src={'./../../../../assets/images/customers/Payklever.png'} alt="" />
        </Card>
      </Link>
    </Column>
  );
};

export default Payklever;
