import React, { useCallback } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Card, Column } from 'bloomer';
import styled from 'styled-components';
import H4 from '../../../../Typography/H4';
import { navigate } from 'gatsby';

const Title = styled(H4)`
  text-align: left;
  font-weight: 100;
  font-family: 'Lato-Light' !important;
  width: 351px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  padding-top: 8px;
  position: relative;
`;

const CardStyled = styled(Card)`
  max-height: 565px;
  min-height: 520px;
  box-shadow: 0px 10px 20px #0000001a;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 14px;
`;

const Image = styled.div`
  height: 300px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const Container = styled.div`
  width: 351px;
  overflow: hidden;
`;

const Paragraph = styled.p`
  font-size: 17px;
  font-family: 'Lato-bold' !important;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  color: #264a60;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 95px;
`;

const Readmore = styled.p`
  font-size: 17px;
  font-family: 'Lato-bold' !important;
  text-align: right;
  padding-left: 10px;
  color: #e76c29;
  padding-right: 10px;
  margin-bottom: 14px;
  position: relative;
  right: 29px;
  top: -10px;
  cursor: pointer;
`;

const GeeksAcademy = () => {
  const handleClick = useCallback(() => {
    navigate('/customer-success-stories/4geeks-academy');
  });

  return (
    <Column isSize={{ mobile: 12, desktop: 4 }} key="4Geeks Academy">
      <CardStyled>
        <Image>
          <StaticImage src={'./../../../../assets/images/customers/4geeks.png'} alt="" />
        </Image>
        <Container>
          <Title>4Geeks Academy</Title>
        </Container>
        <Paragraph>
          4Geeks Academy Contact Person: Marcelo Ricigliano Location: Miami, US, Caracas and
          Maracaibo, Venezuela Industry: Education Web Site…
        </Paragraph>
        <Readmore onClick={() => handleClick()}>Read More</Readmore>
      </CardStyled>
    </Column>
  );
};

export default GeeksAcademy;
