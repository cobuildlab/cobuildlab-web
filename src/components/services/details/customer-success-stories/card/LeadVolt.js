import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  Container,
  Image,
  ParagraphDivStyled,
  Paragraph,
  ReadmoreDivStyled,
  Readmore,
  TitleDivStyled,
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
          <TitleDivStyled>
            <TitleStyled>LeadVolt</TitleStyled>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>
            Leadvolt is a high touch lead management system that closes leads faster, provides full
            transparency, and empowers your agency to focus on the customer…
          </Paragraph>
        </ParagraphDivStyled>
        <ReadmoreDivStyled>
          <Readmore onClick={() => handleClick()}>Read More</Readmore>
        </ReadmoreDivStyled>
      </CardStyled>
    </Column>
  );
};

export default LeadVolt;
