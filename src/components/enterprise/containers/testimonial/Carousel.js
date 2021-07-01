import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import Item from './Item';
import './testimonial.scss';

const Testimonial = () => {
  const data = useStaticQuery(query);

  const items = data.allTestimonialJson.nodes.map(({ id, content, title, subtitle, image }) => (
    <Item key={id} title={title} z subtitle={subtitle} description={content} image={image} />
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // eslint-disable-next-line react/display-name
    customPaging: function (i) {
      return (
        <a>
          <img
            width={50}
            height={50}
            src={data.allTestimonialJson.nodes[i].image.childImageSharp.gatsbyImageData.src}
            alt={'Testimonials images'}
          />
        </a>
      );
    },
  };

  return (
    <div className="testimonial-slider ">
      <div className="testimonial-outer-box">
        <Slider {...settings}>{items}</Slider>
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
            gatsbyImageData(layout: FIXED)
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
