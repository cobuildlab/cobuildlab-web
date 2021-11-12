import { css } from 'styled-components';

// Fill

export const baseCss = css`
  padding: 9px 20px;
  border: none;
  cursor: pointer;
  transition: all 0.2s linear;
  outline-style: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 300;
  &:hover,
  &:focus {
    border: none;
  }
`;

export const defaultStyle = css`
  ${baseCss}
  background: #E76C29 0% 0% no-repeat padding-box;
  box-shadow: 0px 8px 25px #e76c2999 !important;
  color: #fff !important;
  &:hover,
  &:focus {
    background: #d05b1b 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px #264a6017 !important;
  }
`;

export const primaryStyle = css`
  ${baseCss}
  padding: 0;
  background: none;
  box-shadow: none;
  color: #e76c29;
  &:hover {
    color: $btn-active-bg;
    transform: scale(1.05);
  }
`;

export const secondaryStyle = css`
  background: none;
  box-shadow: none;
  color: #90A2AD !important;
  &:hover{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 15px #2749606C !important;
  &:focus{
    background: #264A60 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 15px #2749606C !important;
    color: #fff !important;
  }
`;

// Outline

export const baseOutlineCss = css`
  padding: 9px 20px;
  cursor: pointer;
  transition: all 0.2s linear;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 300;
`;

export const primaryOutlineStyle = css`
  box-shadow: -1px 4px 20px 2px #90a2ad !important;
  background-color: #e76c29 !important;
  border: 1px solid #e76c29 !important;
  box-shadow: -1px 4px 20px 2px #90a2ad !important;
  font-weight: bold;
  color: #ffffff !important;
`;

export const defaultOutlineStyle = css`
  ${baseOutlineCss}
  border: 1px solid #264a60;
  color: #264a60;
  background-color: transparent;
  &:hover {
    ${primaryOutlineStyle}
  }
`;
