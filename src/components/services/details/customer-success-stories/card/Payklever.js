import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column, Title } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  Container,
  Image,
  ParagraphDivStyled,
  Paragraph,
  ReadmoreDivStyled,
  TitleDivStyled,
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
            <Title isSize={1} className="title-card-customer-success">
              Payklever Campaign Manager
            </Title>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>
            Payklever Campaign Manager With Payklever you can turn your car into a payment method.
            You can drive quietly and never handle your cash or…
          </Paragraph>
        </ParagraphDivStyled>
        <ReadmoreDivStyled>
          <Title
            isSize={6}
            className="readmore-card-customer-success"
            onClick={() => handleClick()}>
            Read More
          </Title>
        </ReadmoreDivStyled>
      </CardStyled>
    </Column>
  );
};

export default Payklever;
