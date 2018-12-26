import React from 'react'
import '../assets/css/index.css'
const BadgeIndustry = props => {
  return (
    <div className="view-badge-industry">
      <div className="columns is-desktop is-mobile has-text-centered">
        <div className="column">
          <p className="badge-industry">Software Development SMBs</p>
        </div>
        <div className="column">
          <p className="badge-industry">Advertising and Retailling</p>
        </div>
        <div className="column">
          <p className="badge-industry">Fitness and Fashion</p>
        </div>
        <div className="column">
          <p className="badge-industry">Communities and Lifestyle</p>
        </div>
      </div>
    </div>
  )
}
export default BadgeIndustry
