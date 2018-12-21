import React from 'react'
import { Media, MediaLeft, MediaContent, Column, Columns } from 'bloomer'
import '../assets/css/index.css'

const StudyCase = props => {
  const { logo, text } = props
  return (
    <Media className="component-changes">
      <MediaLeft
      className="study-logo"
      style={{
        backgroundImage: `url(${logo})`
      }}
      >
      </MediaLeft>
      <MediaContent>
        <p className="study-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          odit earum numquam voluptas modi incidunt exercitationem excepturi
          animi, facilis vero recusandae magni reiciendis culpa neque cum vitae
          ducimus similique minima!Voluptatibus unde repudiandae, libero totam.
        </p>

        <h2 className="study-subtitle">Outcomes</h2>

        <br />

        <Columns>
          <Column className="study-subtext">
            Lorem ipsum
            <br />
            <span className="study-number">99%</span>
          </Column>
          <Column className="study-subtext">
            Lorem ipsum
            <br />
            <span className="study-number">99%</span>
          </Column>
          <Column className="study-subtext">
            Lorem ipsum
            <br />
            <span className="study-number">99%</span>
          </Column>
          <Column className="study-subtext">
            Lorem ipsum
            <br />
            <span className="study-number">99%</span>
          </Column>
        </Columns>
      </MediaContent>
    </Media>
  )
}

export default StudyCase
