import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fb from '../../assets/images/icons/facebook.svg';
import ig from '../../assets/images/icons/instagram.svg';

const Container = styled.div`
  position: relative;
  transition: transform 0.3s ease-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    z-index: 100;
  }
`;

const ImagesWrapper = styled.div`
  position: relative;
  display: flex;
`;

const ImageOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #264a60;
  opacity: 0.55;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 1em;
`;

const Name = styled.div`
  text-align: center;
  font-size: 18px;
  color: #264a60;
  font-weight: bold;
  text-transform: capitalize;
`;

const Description = styled.div`
  text-align: center;
  font-size: 14px;
  color: #264a60;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const Icon = styled.img`
  margin: 0 1em;
`;

const TeamCard = ({ src, alt, name, description }) => (
  <Container>
    <ImagesWrapper>
      <Image src={src} alt={alt} />
      <ImageOverlay />
    </ImagesWrapper>
    <Content>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Footer>
        <Icon src={fb} alt="fb" />
        <Icon src={ig} alt="ig" />
      </Footer>
    </Content>
  </Container>
);

TeamCard.defaultProps = {
  alt: '',
};

TeamCard.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TeamCard;
