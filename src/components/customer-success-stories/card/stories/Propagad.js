import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const Propagad = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/propagad'}>
        <Card
          title={'Propagad'}
          description={
            <>
              <p>
                A marketplace to buy and sell ad spaces on any media, anywhere. Their AdMach
                algorithm give a relevance score between audiences and ad offers.
              </p>
              <span>
                <b>Marketing | e-commerce | AI</b>
              </span>
            </>
          }>
          <StaticImage src={'./../../../../assets/images/customers/Propagad.jpg'} alt="" />
        </Card>
      </Link>
    </Column>
  );
};

export default Propagad;
