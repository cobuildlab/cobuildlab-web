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

const CollabToGrow = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/collab-to-grow');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="Collab To Grow">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/collab-logo.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>SaaS</p>
            </TagStyled>
            <TagStyled>
              <p>Enterprise</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              One-of-a-kind SaaS <b>Project Management System</b> that incorporates industry-leading
              practices, workflows, and tools to help executives unlock the growth potential of
              their strategic alliances.
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

export default CollabToGrow;
