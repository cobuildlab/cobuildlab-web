/*
  Style by Customer Success Stories in Services Details
 */

import styled from 'styled-components';
import { Card, Title, Subtitle } from 'bloomer';
import colors from './../../../2021/colors';

export const TitleStyled = styled(Title)`
  font-size: calc(40px + (50 - 40) * ((100vw - 320px) / (1920 - 320)));
  color: ${colors.indigo};
  text-align: left;
  font-weight: 100;
  font-family: 'Lato-Light' !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TitleDivStyled = styled.div`
  width: 351px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  padding-top: 8px;
  position: relative;
`;

export const CardStyled = styled(Card)`
  max-height: 565px;
  min-height: 520px;
  box-shadow: 0px 10px 20px #0000001a;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 14px;
`;

export const Image = styled.div`
  height: 300px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

export const Container = styled.div`
  width: 351px;
  overflow: hidden;
`;

export const Paragraph = styled(Subtitle)`
  font-size: 17px;
  font-family: 'Lato-bold' !important;
  text-align: left;
  color: #264a60;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ParagraphDivStyled = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  margin-top: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 95px;
`;

export const ReadmoreDivStyled = styled.div`
  padding-right: 10px;
  margin-bottom: 14px;
  position: relative;
  right: 29px;
  top: -10px;
  cursor: pointer;
`;

export const Readmore = styled(Subtitle)`
  font-size: 17px;
  font-family: 'Lato-bold' !important;
  text-align: right;
  color: #e76c29;
  position: relative;
  right: 29px;
  top: -10px;
  cursor: pointer;
`;
