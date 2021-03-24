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

const MyVoice = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/my-voice');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="MyVoice">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/my-voice.jpg'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <TitleStyled>MyVoice</TitleStyled>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>
            Cobuild Lab partnered up with Kadem Education to raise teacher’s voices by building a
            software solution.
          </Paragraph>
        </ParagraphDivStyled>
        <ReadmoreDivStyled>
          <Readmore onClick={() => handleClick()}>Read More</Readmore>
        </ReadmoreDivStyled>
      </CardStyled>
    </Column>
  );
};

export default MyVoice;
