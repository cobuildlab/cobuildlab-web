import React from 'react';
import '../assets/css/index.css';
const BadgeIndustry = (props) => {
  return (
    <div className="view-badge-industry">
      <p
        className="has-text-centered subtitle mt-3 is-marginless"
        style={{ color: '#244a62', marginBottom: '0px !important' }}>
        <b>We specialize in these industries:</b>
      </p>
      <div className="columns is-desktop is-mobile has-text-centered is-hidden-mobile is-marginless">
        <div className="column">
          <p className="badge-industry">Advertising and Retailling</p>
        </div>
        <div className="column">
          <p className="badge-industry">Fitness and Fashion</p>
        </div>
        <div className="column">
          <p className="badge-industry">Communities and Lifestyle</p>
        </div>
        <div className="column">
          <p className="badge-industry">ERP Software</p>
        </div>
      </div>
      <div className="columns is-desktop is-mobile has-text-centered is-hidden-tablet is-marginless">
        <div className="column is-paddingless">
          <p className="badge-industry">Advertising and Retailling</p>
        </div>
        <div className="column is-paddingless">
          <p className="badge-industry">Fitness and Fashion</p>
        </div>
      </div>
      <div className="columns is-desktop is-mobile has-text-centered is-hidden-tablet is-marginless">
        <div className="column is-paddingless">
          <p className="badge-industry">Communities and Lifestyle</p>
        </div>
        <div className="column is-paddingless">
          <p className="badge-industry">ERP Software</p>
        </div>
      </div>
    </div>
  );
};
export default BadgeIndustry;
