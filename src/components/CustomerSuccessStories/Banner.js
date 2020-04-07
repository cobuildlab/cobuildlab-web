import React from 'react';
import { Container } from 'bloomer';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import Paragraph from '../Typography/Paragraph';
import { TextOrange } from '../Typography/TextHelpers';
import BannerBackground from '../2020/BannerBackground';

const Wrapper = styled.div`
  position: relative;
`;

const TitleContainer = styled.div`
  margin-top: 6.5em;
  & > p {
    margin-top: 3em;
    width: 50%;
  }
`;

const Description = styled(Paragraph)`
  line-height: 1.5;
`;

const Banner = () => (
  <Wrapper>
    <BannerBackground />
    <Container>
      <TitleContainer>
        <H1>
          New <TextOrange>Ideas</TextOrange>, forged <br />
          at <TextOrange>Cobuild Lab</TextOrange>
        </H1>
        <Description>
          Many enter, others leave. In the end, the most restless and daring to undertake the
          digital world have found them perfect place because they have been cared for and
          understood in the particularities of their local businesses. The laboratories in Miami by
          Cobuild Lab has allowed creating new and better ideas, born of other ideas.
        </Description>
      </TitleContainer>
    </Container>
  </Wrapper>
);

export default Banner;
