import { HeroHeader as BloomerHeroHeader } from 'bloomer';
import styled from 'styled-components';

export const HeroHeader = styled(BloomerHeroHeader)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 10px;
  padding-bottom: 10px;

  nav {
    display: flex;
    width: 100%;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .nav-center .navbar-item a .nav-item {
    padding: 0px 15px 0px 15px;
    line-height: 1;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-align: center;
  }

  .nav-center .navbar-item a:not(:last-child) .nav-item {
    border-right: 2px solid ${({ theme }) => theme.colors.white};
  }

  .nav-right {
    .nav-item {
      a {
        display: flex;
        color: ${({ theme }) => theme.colors.white};
      }

      svg {
        color: ${({ theme }) => theme.colors.main};
        margin-right: 10px;
      }

      &:first-child {
        padding-bottom: 10px;
      }
    }
  }
`;
