import styled from 'styled-components';
import Paragraph from '../../Typography/Paragraph';

const CalculatorFeatureDescription = styled(Paragraph)`
  font-size: 16px;
  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export default CalculatorFeatureDescription;
