/*
  Style by Customer Success Stories in Services Details
 */

import styled from 'styled-components';
import { Card } from 'bloomer';

export const CardStyled = styled(Card)`
  max-height: 520px;
  min-height: 488px;
  box-shadow: 0px 10px 20px #0000001a;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 14px;
`;

export const Image = styled.div`
  height: 210px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  img {
    height: 240px !important;
    margin-top: 30px !important;
  }
`;

export const Container = styled.div`
  width: 351px;
  overflow: hidden;
`;

export const ParagraphDivStyled = styled.div`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  margin-top: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 95px;
  & p {
    font-size: 17px;
    line-height: 25px;
    text-align: justify;
  }
`;

export const ReadmoreDivStyled = styled.div`
  padding-right: 15px;
  margin-bottom: 14px;
  position: relative;
  cursor: pointer;
  margin-top: 93px;
`;

export const DivTagStyled = styled.div`
  display: flex;
  }
`;

export const TagStyled = styled.div`
  height: 20px;
  background-color: #d2dfe6;
  border-radius: 22px;
  padding: 0px 9px;
  margin: 15px 4px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  & p {
    font-family: 'Lato-Black', sans-serif !important;
    font-weight: bold;
    font-size: 12px;
    color: #264a60;
    text-align: center;
    line-height: 20px;
  }
`;
