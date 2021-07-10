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

const LeadVolt = () => {
  const handleClick = () => {
    navigate('/customer-success-stories/leadvolt');
  };
  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="LeadVolt">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/leadvolt-logo.jpg'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>SaaS</p>
            </TagStyled>
            <TagStyled>
              <p>Enterprise Software</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              It{"'"}s a high-touch <b>Lead Management System</b> that closes leads faster, provides
              full transparency, and empowers any company to focus only on the customer.
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

export default LeadVolt;
