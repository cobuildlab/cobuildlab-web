import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  Container,
  Image,
  Paragraph,
  Readmore,
  TitleStyled,
} from '../../../../2021/services/customer-success-stories/styled';

const Propagad = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/my-voice');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="MyVoice">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/Propagad.jpg'} alt="" />
        </Image>
        <Container>
          <TitleStyled>Propagad</TitleStyled>
        </Container>
        <Paragraph>
          Propagad Contact Person: Cesar Lang Location: Miami, US Industry: Marketing and
          Advertising Web Site: www.propagad.com Introducing Cesar…
        </Paragraph>
        <Readmore onClick={() => handleClick()}>Read More</Readmore>
      </CardStyled>
    </Column>
  );
};

export default Propagad;
