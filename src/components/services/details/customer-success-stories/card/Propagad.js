import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column, Subtitle, Title } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  Image,
  ParagraphDivStyled,
  ReadmoreDivStyled,
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
          <Subtitle className={'paragraph-card-customer-success'}>
            Propagad Contact Person: Cesar Lang Location: Miami, US Industry: Marketing and
            Advertising Web Site: www.propagad.com Introducing Cesar…
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
