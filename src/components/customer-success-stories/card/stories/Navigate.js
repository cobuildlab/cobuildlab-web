import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const ArtVault = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/navigate'}>
        <Card
          title={'Navigate'}
          description={
            <>
              <p>
                Founded by Pedro Sostre, a consultant and author with 20 years of experience in
                building companies, Navigate helps innovative Startup founders navigate the business
                world and get their start-up ...
              </p>
              <span>
                <b>Web</b>
              </span>
            </>
          }>
          <StaticImage
            src={'./../../../../assets/images/customers/navigate-logo.png'}
            alt="Navigate"
            className={'navigate'}
          />
        </Card>
      </Link>
    </Column>
  );
};

export default ArtVault;
