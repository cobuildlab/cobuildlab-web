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
          <TitleStyled>Massone</TitleStyled>
        </Container>
        <Paragraph>
          Massone Mechanical Massone Mechanical offers maintenance and installation services to
          commercial refrigeration companies. Offering high…
        </Paragraph>
        <Readmore onClick={() => handleClick()}>Read More</Readmore>
      </CardStyled>
    </Column>
  );
};

export default Massone;
