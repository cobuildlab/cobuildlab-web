import React from 'react';
import { Media, MediaLeft, MediaContent, Content } from 'bloomer';
import '../assets/css/index.css';
import logo from '../resources/weedmatch.png';
import image from '../resources/oscar-weedmatch.png';

const Testimonial = () => {
  const text = `"Excellent experience. I'm glad that we choose Cobuild Lab to develop the Weedmatch platform. Work with an exceptional technical team was one of our goals when we started and I'm glad that we achieve it. They help us transform our Idea into the ideal product for our consumers." Oscar Lopez, CEO of Weedmatch.`;
  return (
    <Media className="component-changes">
      <MediaLeft
        className="testimonial-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <MediaContent>
        <Content>
          <div className="center-logo-mobile">
            <img src={logo} className="testimonial-logo" />
          </div>
          <p className="testimonial-text">{text}</p>
        </Content>
      </MediaContent>
    </Media>
  );
};

export default Testimonial;
