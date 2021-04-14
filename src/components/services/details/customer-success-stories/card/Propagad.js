import React, { useCallback } from 'react';

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

const Propagad = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/my-voice');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="MyVoice">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/Propagad.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>Marketing</p>
            </TagStyled>
            <TagStyled>
              <p>e-commerce</p>
            </TagStyled>
            <TagStyled>
              <p>AI</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              A marketplace to buy and sell ad spaces on any media, anywhere. Their AdMach algorithm
              give a relevance score between audiences and ad offers.
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

export default Propagad;
