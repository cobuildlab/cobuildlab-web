import React, { useCallback } from 'react';

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

const GeeksAcademy = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/4geeks-academy');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="4Geeks Academy">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/4geeks.png'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>Education</p>
            </TagStyled>
            <TagStyled>
              <p>e-learning</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              A <b>Learning Management System</b> that train and turn their students around the
              globe into software developers with an innovative study program.
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

export default GeeksAcademy;
