import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import TeamSocialNetworks from './TeamSocialNetworks';

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImagesWrapper = styled.div`
  position: relative;
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

const Content = styled.div`
  padding: 1em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const TeamCard = ({ src, name, description, socialNetworks }) => (
  <Container>
    <ImagesWrapper>
      <Img fluid={src} alt={name} />
      <ImageOverlay />
    </ImagesWrapper>
    <Content>
      <div>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </div>
      <Footer>
        <TeamSocialNetworks data={socialNetworks} />
      </Footer>
    </Content>
  </Container>
);

TeamCard.defaultProps = {
  socialNetworks: [],
};

TeamCard.propTypes = {
  src: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  socialNetworks: PropTypes.array,
};

export default TeamCard;
