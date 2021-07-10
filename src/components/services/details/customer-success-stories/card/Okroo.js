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

const Okroo = () => {
  const handleClick = () => {
    navigate('/customer-success-stories/okroo');
  };

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="Okroo">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/okroo.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>Retail</p>
            </TagStyled>
            <TagStyled>
              <p>Lifestyle</p>
            </TagStyled>
            <TagStyled>
              <p>Mobile</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              A <b>Mobile App</b> that works like a news feed or a social network to connect
              customers with the promotions of restaurants near them.
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

export default Okroo;
