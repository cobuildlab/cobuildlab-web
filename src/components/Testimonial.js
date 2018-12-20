import React from 'react'
import { Media, MediaLeft, MediaContent, Content } from 'bloomer'
import '../assets/css/index.css'

const Testimonial = props => {
  const { image, logo, text } = props
  return (
    <Media>
      <MediaLeft>
        <img src={image} className="testimonial-image" />
      </MediaLeft>
      <MediaContent>
        <Content>
          <img src={logo} className="testimonial-logo" />
          <p className="testimonial-text">{text}</p>
        </Content>
      </MediaContent>
    </Media>
  )
}

export default Testimonial
