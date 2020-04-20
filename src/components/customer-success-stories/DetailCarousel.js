import React from 'react';
import PropTypes from 'prop-types';
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1223px;
  height: 100%;
  background-color: #f4f6fb;
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
  z-index: 100px;
  padding-top: 3em;
  @media screen and (max-width: 768px) {
    padding-top: 1em;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding-top: 2em;
  }
`;

const SliderWrapper = styled.div`
  max-width: 900px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
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
  &:before,
  &after {
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

NextArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => null,
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const PrevArrow = ({ className, style, onClick }) => (
  <Left className={className} style={style} onClick={onClick}>
    <Icon src={leftIcon} alt="prev-icon" />
  </Left>
);

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => null,
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  draggable: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        draggable: true,
        autoplay: true,
        speed: 2000,
        infinite: true,
      },
    },
  ],
};

const DetailCarousel = ({ children }) => (
  <Container>
    <GrayBackground />
    <Wrapper>
      <img src={img} alt="carousel" />
      <SliderContainer>
        <SliderWrapper>
          <Slider {...settings}>{children}</Slider>
        </SliderWrapper>
      </SliderContainer>
    </Wrapper>
  </Container>
);

DetailCarousel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DetailCarousel;
