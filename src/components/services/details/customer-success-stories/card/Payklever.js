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

const Payklever = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/payklever-campaign-manager');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="Payklever">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/Payklever.png'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            Payklever Campaign Manager With Payklever you can turn your car into a payment method.
            You can drive quietly and never handle your cash or…
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

export default Payklever;
