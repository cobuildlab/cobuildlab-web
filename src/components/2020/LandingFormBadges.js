import React from 'react';

// BADGES LOGO
import badge1 from '../../resources/badges1.png';
import badge2 from '../../resources/badges2.png';
import badge3 from '../../resources/badges3.png';
import badge4 from '../../resources/badges4.png';

const LandingFormBadges = () => (
  <div className="has-text-centered">
    <img src={badge1} className="badge" />
    <img src={badge2} className="badge" />
    <img src={badge3} className="badge" />
    <img src={badge4} className="badge-google" />
  </div>
);
 
export default LandingFormBadges;