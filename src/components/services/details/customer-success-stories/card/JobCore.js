import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column, Subtitle, Title } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  DivTagStyled,
  Image,
  ParagraphDivStyled,
  ReadmoreDivStyled,
  TagStyled,
} from '../../../../2021/services/customer-success-stories/styled';

const JobCore = () => {
  const handleClick = () => navigate('/customer-success-stories/jobcore');

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="MyVoice">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/jobcore.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>Recruiting</p>
            </TagStyled>
            <TagStyled>
              <p>Web and Mobile</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              America’s first distributed talent pool for the hospitality industry that allows
              employers to post job openings for candidates using the <b>Web and Mobile App</b>.
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

export default JobCore;
