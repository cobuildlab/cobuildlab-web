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
          <TitleStyled>Mama</TitleStyled>
        </Container>
        <Paragraph>
          The Match-Making app MAMA is a fun and easy-to-use connectivity tool that makes
          lightning-fast introductions...
        </Paragraph>
        <Readmore onClick={() => handleClick()}>Read More</Readmore>
      </CardStyled>
    </Column>
  );
};

export default Mama;
