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

const CollabToGrow = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/collab-to-grow');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="Collab To Grow">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/collab-logo.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            Is a technology-enabled managed services and advisory firm that specializes in improving
            the performance of strategic alliances...
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

export default CollabToGrow;
