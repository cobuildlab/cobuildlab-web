/*
  Style by Customer Success Stories in Services Details
 */

import styled from 'styled-components';
import { Card } from 'bloomer';

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
  cursor: pointer;
`;
