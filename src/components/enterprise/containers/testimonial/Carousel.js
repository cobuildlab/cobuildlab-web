import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import Item from './Item';
import Avatar from './Avatar';
import './testimonial.scss';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Testimonial = () => {
  const data = useStaticQuery(query);

  const items = data.allTestimonialJson.nodes.map(({ id, content, title, subtitle }) => (
    <Item key={id} title={title} subtitle={subtitle} description={content} />
  ));

  return (
    <div className="testimonial-slider ">
      <div className="testimonial-outer-box">
        <Slider
          {...settings}
          customPaging={(index) => <Avatar index={index} data={data.allTestimonialJson.nodes} />}>
          {items}
        </Slider>
      </div>
    </div>
  );
};

const query = graphql`
  query {
    allTestimonialJson {
      nodes {
        image {
          id
          childImageSharp {
            fluid {
              srcWebp
            }
          }
        }
        content
        id
        title
        subtitle
      }
    }
  }
`;

export default Testimonial;
