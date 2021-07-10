import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column, Title, Subtitle } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  DivTagStyled,
  Image,
  ParagraphDivStyled,
  ReadmoreDivStyled,
  TagStyled,
} from '../../../../2021/services/customer-success-stories/styled';

const Massone = () => {
  const handleClick = () => {
    navigate('/customer-success-stories/massone');
  };

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="Massone">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/Massone.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>Transport</p>
            </TagStyled>
            <TagStyled>
              <p>Enterprise </p>
            </TagStyled>
            <TagStyled>
              <p>Web and Mobile</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              A <b>Fleet Management System</b> that allows the tracking of their products, staff,
              and services.
            </p>
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

export default Massone;
