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

const Avsee = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/avsee');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="Avsee">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/avsee-logo.jpg'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <TitleStyled>Avsee</TitleStyled>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>
            The Avsee team chose Cobuild Lab to be their technology partner in developing a platform
            that helps physicians and patients…
          </Paragraph>
        </ParagraphDivStyled>
        <ReadmoreDivStyled>
          <Readmore onClick={() => handleClick()}>Read More</Readmore>
        </ReadmoreDivStyled>
      </CardStyled>
    </Column>
  );
};

export default Avsee;
