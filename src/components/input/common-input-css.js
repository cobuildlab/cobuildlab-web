import { css } from 'styled-components';
import colors from '../../components/2021/colors.json';

export const primaryStyle = css`
  border: none !important;
  box-shadow: 0px 10px 20px #0000001a !important;
  color: ${colors.indigo} !important;

  ::placeholder {
    color: ${colors.indigo} !important;
  }
`;
