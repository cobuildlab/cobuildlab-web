import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  Container,
  Image,
  ParagraphDivStyled,
  Paragraph,
  ReadmoreDivStyled,
  Readmore,
  TitleDivStyled,
  TitleStyled,
} from '../../../../2021/services/customer-success-stories/styled';

const Okroo = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/okroo');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="Okroo">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/okroo.jpg'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <TitleStyled>Okroo</TitleStyled>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>
            Some of Miami{"'"}s most interesting dishes are found in the heart of Downtown, and its
            restaurants are a reflection of its melting pot quality…
          </Paragraph>
        </ParagraphDivStyled>
        <ReadmoreDivStyled>
          <Readmore onClick={() => handleClick()}>Read More</Readmore>
        </ReadmoreDivStyled>
      </CardStyled>
    </Column>
  );
};

export default Okroo;
