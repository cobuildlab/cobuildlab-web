import React from 'react';
import Scroll from '../scroll';
import styled from 'styled-components';
import { Link } from 'gatsby';
import moment from 'moment';
import img from '../../../../assets/images/footer/footer-bg.png';

const ContainerCopy = styled.div`
  background-color: #264a60;
  transition: all 0.6s ease-in-out;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.15;
    background: url(${img}) no-repeat center;
    background-size: cover;
  }
`;

const CopyText = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));
  position: relative;
  z-index: 10;
`;

const CopyLink = styled.div`
  text-align: center;
  span {
    font-size: calc(13px + (14 - 13) * ((100vw - 320px) / (1920 - 320)));
    font-weight: 400;
    color: #fff;
    transition: all 0.5s ease-in-out;
    line-height: 30px;
  }
`;

const Redirect = styled(Link)`
  color: #e76c29;
  margin-left: 0.5em;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const CopyRightFooter = () => (
  <ContainerCopy>
    <CopyText>
      <CopyLink>
        <span>© Copyright {moment().year()} Business. All Rights Reserved</span>
        <span>
          <Redirect to="/privacy-policy">Privacy & Policy</Redirect>
        </span>
      </CopyLink>
      <Scroll />
    </CopyText>
  </ContainerCopy>
);
export default CopyRightFooter;
