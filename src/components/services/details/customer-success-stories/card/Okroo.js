import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column, Title, Subtitle } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  Container,
  Image,
  ParagraphDivStyled,
  ReadmoreDivStyled,
  TitleDivStyled,
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
            <Title isSize={1} className="title-card-customer-success">
              Okroo
            </Title>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            Some of Miami{"'"}s most interesting dishes are found in the heart of Downtown, and its
            restaurants are a reflection of its melting pot quality…
          </Subtitle>
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

export default Okroo;
