import { StaticImage } from 'gatsby-plugin-image';
import Paragraph from '../Typography/Paragraph';
import colors from '../../components/2021/colors.json';
import styled from 'styled-components';
import React from 'react';
import H6 from '../Typography/H6';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  background-color: ${colors.indigo};
`;

const Boundaries = styled.div`
  position: relative;
  overflow: hidden;
`;

const TransparentOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(38 74 96 / 50%);
  top: 0;
  left: 0;
  padding: 0 2.5rem 0 2.5rem;
  align-items: flex-end;
  display: flex;
`;

const Section = styled.div`
  padding: 2rem 2.5rem 4rem 2.5rem;
`;

const P = styled(Paragraph)`
  color: #ffffff;
  font-size: x-large;
`;

const Title = styled(H6)`
  color: #ffffff;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const ReferralsRightSideHero = () => (
  <Wrapper>
    <Boundaries>
      <StaticImage
        objectFit="contain"
        src="../../assets/images/referrals/the-best-male-friends-spending-time-together-with-laptop.jpg"
        alt="The best male friends spending time together with laptop"
      />
      <TransparentOverlay>
        <Title tag="h6">
          Know someone who could use the
          <br /> benefits of custom software?
        </Title>
      </TransparentOverlay>
    </Boundaries>
    <Section>
      <P>So, we have good news for you and your friend!</P>
      <P>
        Now when you refer your friend to Cobuild
        <br /> Lab, you can take some money off your pill or
        <br />
        receive some cash for it.
      </P>
    </Section>
  </Wrapper>
);
