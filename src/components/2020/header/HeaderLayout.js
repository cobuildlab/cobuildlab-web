import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavDivider = styled.div`
  box-shadow: 0px 1px 2px #254a6038;
  & > div {
    padding: 0;
  }
`;

export const NavBrand = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 1224px) {
    width: 229px;
    height: 49px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const NavBrandImages = styled.img`
  width: auto !important;
  height: auto !important;
  @media only screen and (min-width: 1224px) {
    margin-right: 5px;
    width: 100%;
    max-height: 100% !important;
  }
`;

export const NavItem = styled.div`
  padding: 0 10px;
`;

export const NavLink = styled(Link)`
  color: #254a60;
  font-weight: 600;
`;
