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

const Payklever = () => {
  const handleClick = () => navigate('/customer-success-stories/payklever-campaign-manager');

  return (
    <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} key="Payklever">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/Payklever.png'} alt="" />
        </Image>
        <ParagraphDivStyled>
          <DivTagStyled>
            <TagStyled>
              <p>Payments</p>
            </TagStyled>
            <TagStyled>
              <p>Application</p>
            </TagStyled>
          </DivTagStyled>
          <Subtitle className={'paragraph-card-customer-success'}>
            <p>
              An innovative <b>hands-free payment method</b> that uses RFID technology to allow
              users to pay at parking lots, drive-thrus, and gas stations while driving.
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

export default Payklever;
