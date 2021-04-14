import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column, Title, Subtitle } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  Image,
  ParagraphDivStyled,
  ReadmoreDivStyled,
} from '../../../../2021/services/customer-success-stories/styled';

const LeadVolt = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/leadvolt');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="LeadVolt">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/leadvolt-logo.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            Leadvolt is a high touch lead management system that closes leads faster, provides full
            transparency, and empowers your agency to focus on the customer…
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

export default LeadVolt;
