import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Column, Title } from 'bloomer';

import { navigate } from 'gatsby';
import {
  CardStyled,
  Container,
  Image,
  ParagraphDivStyled,
  Paragraph,
  ReadmoreDivStyled,
  TitleDivStyled,
} from '../../../../2021/services/customer-success-stories/styled';

const JobCore = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/jobcore');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="MyVoice">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/jobcore.jpg'} alt="" />
        </Image>
        <Container>
          <TitleDivStyled>
            <TitleDivStyled>
              <Title isSize={1} className="title-card-customer-success">
                JobCore
              </Title>
            </TitleDivStyled>
          </TitleDivStyled>
        </Container>
        <ParagraphDivStyled>
          <Paragraph>
            Get work fast and get paid the same day with Jobcore. This is a web platform that allows
            employers to post job applications for candidates…
          </Paragraph>
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
