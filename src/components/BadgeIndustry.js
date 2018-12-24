import React from 'react'
import '../assets/css/index.css'

const BadgeIndustry = props => {
  const { logo, text } = props
  return (
    <div className="view-badge-industry">
      <div class="columns is-desktop has-text-centered">
        <div class="column badge-industry">
          First column
        </div>
        <div class="column badge-industry">
          Second column
        </div>
        <div class="column badge-industry">
          Third column
        </div>
        <div class="column badge-industry">
          Fourth column
        </div>
      </div>
    </div>
  )
}

export default BadgeIndustry
