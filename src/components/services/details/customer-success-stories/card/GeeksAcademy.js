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

const GeeksAcademy = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/4geeks-academy');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="4Geeks Academy">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/4geeks.png'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            4Geeks Academy Contact Person: Marcelo Ricigliano Location: Miami, US, Caracas and
            Maracaibo, Venezuela Industry: Education Web Site…
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

export default GeeksAcademy;
