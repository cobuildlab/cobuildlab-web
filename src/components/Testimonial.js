import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import styled from 'styled-components';
import Img from 'gatsby-image';

// RESOURCES
import QuoteLeft from '../assets/images/testimonial/left-box-blue.png';
import QueteRight from '../assets/images/testimonial/right-box-blue.png';

// TYPOGRAPHY
import H6 from './Typography/H6';
import Paragraph from './Typography/Paragraph';
import { TextOrange } from './Typography/TextHelpers';

const Card = styled.div`
  background-color: #ffff;
  border-radius: 5px;
  padding: 45px 15px;
  text-align: center;
  overflow: hidden;
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 36px;
    height: 25px;
  }
  &:before {
    left: 15px;
    top: 15px;
    background: url(${QuoteLeft}) no-repeat 0;
  }
  &:after {
    right: 15px;
    bottom: 15px;
    background: url(${QueteRight}) no-repeat 0;
  }
`;

const SubTitle = styled(Paragraph)`
  font-weight: 400;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
`;

const Title = styled(H6)`
  text-transform: capitalize;
  margin-bottom: 15px;
  font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
`;

const Description = styled(Paragraph)`
  overflow: hidden;
  padding: 1em 2.5em;
  line-height: 1.6;
`;

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-dots {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: inherit;
    bottom: auto;
    line-height: 0;
    top: -40px;
    li {
      vertical-align: middle;
      position: initial;
      width: 70px;
      height: 70px;
      button {
        &:before {
          display: none;
        }
        padding: 0px !important;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        img {
          border: 4px solid transparent;
          border-radius: 50%;
          padding: 1px;
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      &.slick-active {
        button img {
          border-color: #264a60;
        }
      }
    }
  }
`;

const Images = styled(Img)`
  height: 100%;
  width: 100%;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // eslint-disable-next-line react/display-name
};

const Testimonial = () => {
  const data = useStaticQuery(query);
  const list = data.allTestimonialJson.nodes;

  const items = list.map((item) => (
    <Card key={item.id}>
      <Description>{item.content}</Description>
      <Title>
        <TextOrange>{item.title}</TextOrange>
      </Title>
      <SubTitle>{item.subtitle}</SubTitle>
    </Card>
  ));

  return (
    <StyledSlider
      {...settings}
      customPaging={(id) => (
        <button>
          <Images fluid={list[id].image.childImageSharp.fluid} alt="" />
        </button>
      )}>
      {items}
    </StyledSlider>
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
              srcSetWebp
              sizes
              base64
              aspectRatio
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
