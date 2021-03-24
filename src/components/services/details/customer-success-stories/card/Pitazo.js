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

const Pitazo = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/el-pitazo');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="Weedmatch">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/pitazo-1.jpg'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <Title isSize={1} className="title-card-customer-success">
              El Pitazo
            </Title>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>El Pitazo is Venezuela{"'"}s main independent news website...</Paragraph>
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

export default Pitazo;
