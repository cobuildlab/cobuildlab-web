import React from 'react';

// BADGES LOGO
import badge1 from '../../resources/badges1.png';
import badge2 from '../../resources/badges2.png';
import badge3 from '../../resources/badges3.png';
import badge4 from '../../resources/badges4.png';

const LandingFormBadges = () => (
  <div className="has-text-centered">
    <img src={badge1} className="badge" alt="badge-1" />
    <img src={badge2} className="badge" alt="badge-2" />
    <img src={badge3} className="badge" alt="badge-3" />
    <img src={badge4} className="badge-google" alt="badge-4" />
  </div>
);

export default LandingFormBadges;
