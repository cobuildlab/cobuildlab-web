import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import TeamSocialNetworks from './TeamSocialNetworks';

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  .team-member-img {
    transition: all 0.3s;
    filter: saturate(0.6);
  }

  &:hover {
    z-index: 100;

    .team-member-img {
      filter: drop-shadow(0px 0px 20px #e86b2a8c) saturate(1.02);
      transform: scale(1.01);
    }
  }
`;

// const ImageOverlay = styled.div`
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: #264a60;
//   opacity: 0.55;
// `;

const ImagesWrapper = styled.div`
  position: relative;
  transition: padding .3s;
  // ${Container}:hover & { padding: 2px}
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
  // transition: font-size .3s;

  // ${Container}:hover & { font-size:17px;}
`;
const First = styled.span`
  color: #e76c29;
  // transition: color 0.3s;
  // ${Container}:hover & {
  //   color: #e76c29;
  // }
`;

const Description = styled.div`
  text-align: center;
  font-size: 14px;
  color: #264a60;
  transition: color .3s;

  ${Container}:hover & {
    color: #e76c29;
    font-weight: 500;
  }
}
`;

const Card = ({ children, first, last, description }) => (
  <Container>
    <ImagesWrapper>{children}</ImagesWrapper>
    <Content>
      <div>
        <Name>
          <First>{first}</First>
          {' ' + last}
        </Name>
        <Description>{description}</Description>
      </div>
    </Content>
  </Container>
);

Card.propTypes = {
  children: PropTypes.element.isRequired,
  description: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
};

export default Card;
