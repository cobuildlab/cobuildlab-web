import React from 'react'
import { Media, MediaLeft, MediaContent, Column, Columns } from 'bloomer'
import '../assets/css/index.css'
import logo from '../resources/weedmatch.png'

const StudyCase = () => {
  const text =
    'Weedmatch is a social platform to get you closer to other cannabis lovers in an unique experience. This social network connects you with events and news around the cannabis culture'
  return (
    <Media className="component-changes">
      <MediaLeft
        className="study-logo"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      />
      <MediaContent>
        <p className="study-text">{text}</p>

        <h2 className="study-subtitle">Metrics:</h2>

        <br />

        <Columns className="is-mobile study-case-metrics">
          <Column className="study-subtext is-4-mobile is-2-desktop">
            Time to Market
            <br />
            <span className="study-number">4 Months</span>
          </Column>
          <Column className="study-subtext is-4-mobile is-2-desktop">
            New Users
            <br />
            <span className="study-number">4000</span>
          </Column>
          <Column className="study-subtext is-4-mobile is-2-desktop">
            Daily Active Users
            <br />
            <span className="study-number">500</span>
          </Column>
        </Columns>
      </MediaContent>
    </Media>
  )
}

export default StudyCase
