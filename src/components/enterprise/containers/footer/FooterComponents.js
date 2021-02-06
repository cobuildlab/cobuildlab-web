import styled from 'styled-components';
import H6 from '../../../Typography/H6';
import background from '../../../../assets/2021/images/footer-bg.png';

export const FooterWrapper = styled.div`
  background: #264a60;
  padding: calc(32px + (110 - 40) * ((100vw - 320px) / (1920 - 320))) 2em;
  position: relative;
  border-top-right-radius: calc(30px + (200 - 30) * ((100vw - 320px) / (1920 - 320)));
  & > div {
    z-index: 10;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.15;
    background: url(${background}) no-repeat center;
    background-size: cover;
  }
`;

export const FooterContentWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
  @media (max-width: 1199px) {
    padding-bottom: 50px;
  }
`;

export const FooterLogoContainer = styled.div`
  padding-right: calc(0px + (80 - 0) * ((100vw - 320px) / (1920 - 320)));
  & > img {
    margin-bottom: calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320)));
  }
  & div img {
    @media screen and (max-width: 768px) {
      width: 35%;
    }
  }
`;

export const FooterTitleContainer = styled.div`
  padding-bottom: 10px;
  margin-bottom: calc(15px + (25 - 15) * ((100vw - 320px) / (1920 - 320)));
  position: relative;
  &:after {
    position: absolute;
    content: '';
    width: 30px;
    height: 3px;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
`;

export const FooterTitle = styled(H6)`
  font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
  color: #fff;
`;

export const FooterListItem = styled.li`
  margin-bottom: 1.5em;
  color: #fff;
  display: flex;
  align-items: center;
  & > span{
    margin-right: .5em;
    color: #E76C29;
  }
  a {
    display: table;
    span {
      display: flex;
      align-items: center;
      width: 30px;
      height: 30px;
      line-height: 30px;
      svg {
        display: block;
        text-align: left;
        height: 21px;
      }
  }
`;

export const FooterColumnContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterText = styled.div`
  color: #fff;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
`;
