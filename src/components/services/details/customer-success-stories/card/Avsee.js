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

const Avsee = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/avsee');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="Avsee">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/avsee-logo.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            The Avsee team chose Cobuild Lab to be their technology partner in developing a platform
            that helps physicians and patients…
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

export default Avsee;
