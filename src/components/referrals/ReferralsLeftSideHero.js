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

// font-size: 4rem;
const TextContainer = styled.div`
  font-size: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 100%;
  @media screen and (min-width: 992px) {
    font-size: 4rem;
    width: 100%;
    max-width: 28rem;
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
          {/* <TextOrange>
            Refer a<br /> friend
          </TextOrange>{' '}
          <TextIndigo style={{ fontWeight: 'bold' }}>
            and
            <br /> Earn up to
            <br />
          </TextIndigo>{' '}
          <TextOrange>$5,000</TextOrange>* */}
          <TextOrange>Refer a friend</TextOrange>{' '}
          <TextIndigo style={{ fontWeight: 'bold' }}>and Earn up to</TextIndigo>{' '}
          <TextOrange>$5,000</TextOrange>*
        </Typography>
      </TextContainer>
    </Overlay>
  </Wrapper>
);
