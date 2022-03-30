import React from 'react';
import styled from 'styled-components';
import Typography from '../2020/Typography';
import { TextOrange, TextIndigo } from '../2021/text/TextHelpers';
import { StaticImage } from 'gatsby-plugin-image';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const TextContainer = styled.div`
  font-size: 3rem;
  width: 100%;
  @media screen and (min-width: 992px) {
    font-size: 4rem;
    width: 100%;
    max-width: 30rem;
  }
`;

export const ReferralsLeftSideHero = () => (
  <Wrapper>
    <StaticImage
      style={{
        width: '100%',
        height: '100%',
      }}
      imgStyle={{
        padding: '4rem',
      }}
      objectFit="contain"
      src="../../assets/images/referrals/referrals-background-hero.png"
      alt="Referrals background hero"
    />
    <Overlay>
      <TextContainer>
        <Typography tag="h1">
          <TextOrange>Refer a Friend to </TextOrange>
          <TextIndigo style={{ fontWeight: 'bold' }}>Cobuild Lab Earn up to </TextIndigo>
          <TextOrange>$ 5,000! </TextOrange>
          <TextIndigo>*</TextIndigo>
        </Typography>
      </TextContainer>
    </Overlay>
  </Wrapper>
);
