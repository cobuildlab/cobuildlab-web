import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import VideoPlayIcon from '../2020/VideoPlayIcon';

const Container = styled.div`
  position: relative;
  margin-top: 3em;
  box-shadow: 0px 15px 30px #00000040;
  display: flex;
`;

const IconContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 35%;
  left: 45%;
  @media screen and (max-width: 768px) {
    top: 25%;
    left: 40%;
  }
`;

const ImagesContainer = styled.div`
  width: 100%;
`;

const DetailVideo = ({ id, images }) => (
  <Container>
    <ImagesContainer>
      <Img fluid={images} alt="" />
    </ImagesContainer>
    <IconContainer>
      <VideoPlayIcon videoId={id} />
    </IconContainer>
  </Container>
);

DetailVideo.defaultProps = {
  id: '',
};

DetailVideo.propTypes = {
  id: PropTypes.string,
  images: PropTypes.object.isRequired,
};

export default DetailVideo;
