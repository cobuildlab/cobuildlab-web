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

const LeadVolt = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/leadvolt');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="LeadVolt">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/leadvolt-logo.jpg'} alt="" />
        </Image>
        <Container>
          <TitleStyled>LeadVolt</TitleStyled>
        </Container>
        <Paragraph>
          Leadvolt is a high touch lead management system that closes leads faster, provides full
          transparency, and empowers your agency to focus on the customer…
        </Paragraph>
        <Readmore onClick={() => handleClick()}>Read More</Readmore>
      </CardStyled>
    </Column>
  );
};

export default LeadVolt;
