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

const Propagad = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/my-voice');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="MyVoice">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/Propagad.jpg'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <Title isSize={1} className="title-card-customer-success">
              Propagad
            </Title>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>
            Propagad Contact Person: Cesar Lang Location: Miami, US Industry: Marketing and
            Advertising Web Site: www.propagad.com Introducing Cesar…
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

export default Propagad;
