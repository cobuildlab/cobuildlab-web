import styled from 'styled-components';
import colors from '../2021/colors.json';
import commonStyles from './common-styles';

const CardTitlte = styled.span`
  ${commonStyles}
  display: block;
  font-weight: normal;
  font-family: 'Lato-regular', sans-serif;
  font-size: 12px;
  color: ${colors.indigo};
`;

export default CardTitlte;
