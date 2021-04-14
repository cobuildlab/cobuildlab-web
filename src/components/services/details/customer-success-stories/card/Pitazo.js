import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column, Title, Subtitle } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  Image,
  ParagraphDivStyled,
  ReadmoreDivStyled,
  DivTagStyled,
  TagStyled,
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
          <DivTagStyled>
            <TagStyled>
              <p>News</p>
            </TagStyled>
            <TagStyled>
              <p>Cloud App</p>
            </TagStyled>
            <TagStyled>
              <p>Mobile</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              Venezuela{"'"}s main independent news website with a powerful <b>Mobile App</b> that
              provides a channel of information for all the users in and out of the country.
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

export default Pitazo;
