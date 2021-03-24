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

const Payklever = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/payklever-campaign-manager');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="Payklever">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/Payklever.png'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <TitleStyled>Payklever Campaign Manager</TitleStyled>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>
            Payklever Campaign Manager With Payklever you can turn your car into a payment method.
            You can drive quietly and never handle your cash or…
          </Paragraph>
        </ParagraphDivStyled>
        <ReadmoreDivStyled>
          <Readmore onClick={() => handleClick()}>Read More</Readmore>
        </ReadmoreDivStyled>
      </CardStyled>
    </Column>
  );
};

export default Payklever;
