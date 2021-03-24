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

const Mama = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/mama');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="Mama">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/mama-logo.jpg'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <Title isSize={1} className="title-card-customer-success">
              Mama
            </Title>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            The Match-Making app MAMA is a fun and easy-to-use connectivity tool that makes
            lightning-fast introductions...
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

export default Mama;
