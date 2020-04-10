import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import img from '../../assets/images/customers/carousel-laptop.png';
import leftIcon from '../../assets/images/icons/arrow-left.png';
import rightIcon from '../../assets/images/icons/arrow-right.png';

const Container = styled.div`
  position: relative;
  margin-top: 5em;
`;

const GrayBackground = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #707070;
  opacity: 0.58;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1223px;
  height: 100%;
  background-color: #F4F6FB;
  margin: auto;
`;

const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderWrapper = styled.div`
  max-width: 900px;
  max-height: 500px;
  @media screen and (max-width: 768px){
    width: 70%;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: auto;
`;

const IconContainer = styled.div`
  width: auto;
  height: auto;
  &:before, &after{
    display: none;
  }
`;

const Left = styled(IconContainer)`
  left: -25%;
`;

const Right = styled(IconContainer)`
  right: -25%;
`;

const NextArrow = ({ className, style, onClick }) => (
  <Right className={className} style={style} onClick={onClick}>
    <Icon src={rightIcon} alt="next-icon" />
  </Right>
);


const PrevArrow = ({ className, style, onClick }) => (
  <Left className={className} style={style} onClick={onClick}>
    <Icon src={leftIcon} alt="prev-icon" />
  </Left>
);

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  draggable: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      draggable: true,
      autoplay: true,
      speed: 2000,
      infinite: true,
    }
  }],
};

const DetailCarousel = () => (
  <Container>
    <GrayBackground />
    <Wrapper>
      <img src={img} alt="carousel" /> 
      <SliderContainer>
        <SliderWrapper>
          <Slider {...settings}>
            <div>uno</div>
            <div>dos</div>
            <div>tres</div>
          </Slider>
        </SliderWrapper>
      </SliderContainer>
    </Wrapper>
  </Container>
);

export default DetailCarousel;