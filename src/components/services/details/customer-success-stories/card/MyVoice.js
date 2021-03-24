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
            <Title isSize={1} className="title-card-customer-success">
              MyVoice
            </Title>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            Cobuild Lab partnered up with Kadem Education to raise teacher’s voices by building a
            software solution.
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

export default MyVoice;
