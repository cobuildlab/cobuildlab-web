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

const GeeksAcademy = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/4geeks-academy');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="4Geeks Academy">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/4geeks.png'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <TitleStyled>4Geeks Academy</TitleStyled>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>
            4Geeks Academy Contact Person: Marcelo Ricigliano Location: Miami, US, Caracas and
            Maracaibo, Venezuela Industry: Education Web Site…
          </Paragraph>
        </ParagraphDivStyled>
        <ReadmoreDivStyled>
          <Readmore onClick={() => handleClick()}>Read More</Readmore>
        </ReadmoreDivStyled>
      </CardStyled>
    </Column>
  );
};

export default GeeksAcademy;
