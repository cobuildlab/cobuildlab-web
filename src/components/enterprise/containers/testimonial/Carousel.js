import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import Item from './Item';
import Avatar from './Avatar';
import './testimonial.scss';

//TODO remove this
import img1 from '../../../../assets/images/testimonial/andres-wegacha.jpeg';
import img2 from '../../../../assets/images/testimonial/ale.jpg';
import img3 from '../../../../assets/images/testimonial/robert-mitchell.png';
import img4 from '../../../../assets/images/testimonial/anna.jpeg';

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

export const DATA = [
  {
    id: 1,
    title: 'Andres Aguerrevere',
    subtitle: 'Internal Dashboard Dev for Digital Marketing Agency',
    img: img1,
    content:
      'Cobuild Lab Inc performed admirably in every aspect of the engagement, delivering a high-quality final product. Communicative and dedicated, the team developed a good understanding of the project and exceeded expectations in terms of quality and work ethic.',
  },
  {
    id: 2,
    title: 'Alejandro Sanchez',
    subtitle: 'Jobs Marketplace Mobile App Dev for Hospitality Platform',
    img: img2,
    content:
      'Cobuild Lab Inc delivered the product and continues to provide support to facilitate the release of new versions. The team identifies platform challenges and provides solutions to build a high-quality final product. They offer cost-effective services, which leads to continued collaboration.',
  },
  {
    id: 3,
    title: 'Robert Mitchell',
    subtitle: 'Fieldworker Management for the HVAC Industry',
    img: img3,
    content:
      'Coubild Labs software development process has delivered for our organization. Our proprietary software through developments allows our mobile workforce to Invoice Customers within a day or service. \n' +
      '\n' +
      'Cobuild Labs process gave our organizations an opportunity to transform our workflow and find productivity. We are justified in our decision to work with them after trying several out of the box software solutions. We view Cobuild Labs as an integral part of our technology strategy going forward.',
  },
  {
    id: 4,
    title: 'Anna Keeler',
    subtitle: 'Fieldworker Management for the HVAC Industry',
    img: img4,
    content:
      'Mama Matchmaking is incredibly impressed with Cobuild Lab`s work on our application. The team is providing a complete scope of work and clear solutions for the launch of our project. We are excited about the results, timeline, and budget so far achieved, and look forward to continuing our partnership.',
  },
];
