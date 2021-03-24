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

const Massone = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/massone');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="Massone">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/Massone.jpg'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <Title isSize={1} className="title-card-customer-success">
              Massone
            </Title>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            Massone Mechanical Massone Mechanical offers maintenance and installation services to
            commercial refrigeration companies. Offering high…
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

export default Massone;
