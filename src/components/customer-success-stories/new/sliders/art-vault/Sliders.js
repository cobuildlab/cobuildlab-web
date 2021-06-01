import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersArtVault = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-vault/slider/1.jpg'}
        alt={'Art Vault 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-vault/slider/2.jpg'}
        alt={'Art Vault 2'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-vault/slider/3.jpg'}
        alt={'Art Vault 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-vault/slider/4.jpg'}
        alt={'Art Vault 4'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersArtVault;
