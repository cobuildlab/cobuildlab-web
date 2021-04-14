/*
  Style by Customer Success Stories in Services Details
 */

import styled from 'styled-components';
import { Card } from 'bloomer';

export const CardStyled = styled(Card)`
  max-height: 410px;
  min-height: 410px;
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
`;

export const ReadmoreDivStyled = styled.div`
  padding-right: 15px;
  margin-bottom: 14px;
  position: relative;
  cursor: pointer;
  margin-top: 15px;
`;
