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

const Weedmatch = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/weedmatch');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="Weedmatch">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/Weedmatch.jpg'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <TitleStyled>Weedmatch</TitleStyled>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>
            Weedmatch Weedmatch is the first free cannabis social network made by a group of
            Venezuelans led by its founder Oscar Lopez in Chile…
          </Paragraph>
        </ParagraphDivStyled>
        <ReadmoreDivStyled>
          <Readmore onClick={() => handleClick()}>Read More</Readmore>
        </ReadmoreDivStyled>
      </CardStyled>
    </Column>
  );
};

export default Weedmatch;
