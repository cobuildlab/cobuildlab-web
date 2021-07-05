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

const Avsee = () => {
  const handleClick = () => {
    navigate('/customer-success-stories/avsee');
  };

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key='Avsee'>
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/avsee-logo.jpg'} alt='' />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>Healthcare</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              A <b>Web platform</b> that helps physicians and patients by facilitating the follow-up
              of their medical plan.
            </p>
          </Subtitle>
        </ParagraphDivStyled>
        <ReadmoreDivStyled>
          <Title
            isSize={6}
            className='readmore-card-customer-success'
            onClick={() => handleClick()}>
            Read More
          </Title>
        </ReadmoreDivStyled>
      </CardStyled>
    </Column>
  );
};

export default Avsee;
