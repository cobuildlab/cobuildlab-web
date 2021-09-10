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

const Weedmatch = () => {
  const handleClick = () => navigate('/customer-success-stories/weedmatch');

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="Weedmatch">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../../assets/images/customers/Weedmatch.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>Social Media</p>
            </TagStyled>
            <TagStyled>
              <p>Mobile</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              World{"'"}s first free cannabis social network to connect the community through a{' '}
              <b>Mobile App</b>.
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

export default Weedmatch;
