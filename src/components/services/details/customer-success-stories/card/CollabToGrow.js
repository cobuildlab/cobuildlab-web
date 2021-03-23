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

const CollabToGrow = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/collab-to-grow');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="Collab To Grow">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/collab-logo.jpg'} alt="" />
        </Image>
        <Container>
          <TitleStyled>Collab To Grow</TitleStyled>
        </Container>
        <Paragraph>
          Is a technology-enabled managed services and advisory firm that specializes in improving
          the performance of strategic alliances...
        </Paragraph>
        <Readmore onClick={() => handleClick()}>Read More</Readmore>
      </CardStyled>
    </Column>
  );
};

export default CollabToGrow;
