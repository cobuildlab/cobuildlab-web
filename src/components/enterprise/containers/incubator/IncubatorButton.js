import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import img from '../../../../assets/images/icons/cobuild-lab-gear-logo.svg';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Redirect = styled(Link)`
  padding: 1em 4em;
  background-color: #e76c29;
  display: inline-flex;
  align-items: center;
  border-radius: 999999999999999999999999999px;
  @media screen and (max-width: 768px) {
    padding: 1em 3em;
  }
`;

const ImageContainer = styled.div`
  width: 45px;
  margin-right: 25px;
`;

const Text = styled.span`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  line-height: 1;
  & > strong {
    font-weight: lighter;
    text-transform: capitalize;
  }
`;

const IncubatorButton = () => (
  <Container>
    <Redirect to="/#contact-us-anchor">
      <ImageContainer>
        <img src={img} alt="" />
      </ImageContainer>
      <Text>
        Ask us
        <strong>How</strong>
      </Text>
    </Redirect>
  </Container>
);

export default IncubatorButton;
