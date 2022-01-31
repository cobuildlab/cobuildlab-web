import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from '../2020/Typography';
import { TextOrange, TextIndigo } from '../2021/text/TextHelpers';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const TextContainer = styled.div`
  text-align: justify;
  font-size: xxx-large;
  padding-right: 5rem;
  padding-left: 5rem;
`;

export const ReferralsLeftSideHero = () => (
  <Wrapper>
    {/* <StaticImage
      style={{
        position: 'absolute',
        left: '10%',
        top: '10%',
      }}
      src="./../assets/images/referrals/bubbles-group.png"
      alt="Bubbles group"
    />
    <StaticImage
      style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
      }}
      src="./../assets/images/referrals/plane-lines.png"
      alt="Plane line"
    />
    
    <StaticImage
      style={{ position: 'absolute', left: '80%', top: '25%' }}
      src="./../assets/images/referrals/rocket.png"
      atl="Rocket"
    /> */}
    <StaticImage
      style={{
        position: 'absolute',
        left: '4%',
        top: '30%',
        width: '350px',
      }}
      src="./../assets/images/referrals/pentagon-group.png"
      alt="Pentagon group"
    />
    <StaticImage
      style={{
        position: 'absolute',
        left: '15%',
        top: '85%',
      }}
      src="./../assets/images/referrals/flask.png"
      alt="Flask"
    />
    <StaticImage
      style={{ position: 'absolute', left: '85%', top: '85%' }}
      src="./../assets/images/referrals/smart-phone.png"
      alt="Smart phone"
    />
    <Overlay>
      <TextContainer>
        <Typography tag="h2">
          <TextOrange>Refer a friend</TextOrange>{' '}
          <TextIndigo style={{ fontWeight: 'bold' }}>and Earn up to</TextIndigo>{' '}
          <TextOrange>$5,000</TextOrange>*
        </Typography>
      </TextContainer>
    </Overlay>
  </Wrapper>
);
