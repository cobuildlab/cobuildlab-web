import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  Container,
  Image,
  Paragraph,
  Readmore,
  TitleStyled,
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
          <TitleStyled>El Pitazo </TitleStyled>
        </Container>
        <Paragraph>El Pitazo is Venezuela{"'"}s main independent news website...</Paragraph>
        <Readmore onClick={() => handleClick()}>Read More</Readmore>
      </CardStyled>
    </Column>
  );
};

export default Pitazo;
