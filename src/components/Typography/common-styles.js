import { css } from 'styled-components';
import colors from '../2021/colors.json';

const commonStyles = css`
  line-height: 1.125;
  letter-spacing: 0;
  opacity: 1;
`;

export const baseTextColor = css`
  color: ${colors.indigo};
  font-weight: bold;
`;

export default commonStyles;
