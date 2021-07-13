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

const MyVoice = () => {
  const handleClick = () => navigate('/customer-success-stories/my-voice');

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="MyVoice">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/my-voice.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>Survey</p>
            </TagStyled>
            <TagStyled>
              <p>Education</p>
            </TagStyled>
            <TagStyled>
              <p>Application</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              A <b>Survey Management System</b> designed to raise teacher{"'"}s voices to accomplish
              improvements in the educational system from within.
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

export default MyVoice;
