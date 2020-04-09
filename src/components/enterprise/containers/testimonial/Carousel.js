import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Item from './Item';
import img1 from '../../../../assets/images/testimonial/andres-wegacha.jpeg';
import img2 from '../../../../assets/images/testimonial/ale.jpg';
import img3 from '../../../../assets/images/testimonial/robert-mitchell.png';
import './testimonial.scss';

const DATA = [
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
];

const Button = styled.button`
  .slick-dots li:nth-child(1) & {
    background: url(${({ index }) => (DATA[index] ? DATA[index].img : '')}) no-repeat center;
  }
  .slick-dots li:nth-child(2) & {
    background: url(${({ index }) => (DATA[index] ? DATA[index].img : '')}) no-repeat center;
  }
  .slick-dots li:nth-child(3) & {
    background: url(${({ index }) => (DATA[index] ? DATA[index].img : '')}) no-repeat center;
  }
  .slick-dots li:nth-child(4) & {
    background: url(${({ index }) => (DATA[index] ? DATA[index].img : '')}) no-repeat center;
  }
  .slick-dots li:nth-child(5) & {
    background: url(${({ index }) => (DATA[index] ? DATA[index].img : '')}) no-repeat center;
  }
  .slick-dots li:nth-child(6) & {
    background: url(${({ index }) => (DATA[index] ? DATA[index].img : '')}) no-repeat center;
  }
`;

const customPaging = (index) => <Button index={index} />;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  customPaging,
};

const Testimonial = () => {
  return (
    <div className="testimonial-slider ">
      <div className="testimonial-outer-box">
        <Slider {...settings}>
          {DATA.map((data, index) => (
            <Item
              key={data.title}
              title={data.title}
              subtitle={data.subtitle}
              description={data.content}
              img={data.img}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
