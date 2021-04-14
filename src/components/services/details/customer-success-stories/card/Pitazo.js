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

const Pitazo = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/el-pitazo');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="Weedmatch">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/pitazo-1.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            El Pitazo is Venezuela{"'"}s main independent news website...
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

export default Pitazo;
