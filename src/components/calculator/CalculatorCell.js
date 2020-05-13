import styled from 'styled-components';

const CalculatorCell = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 40px;
  border-bottom: ${({ isColor }) => (isColor === 'white' ? '1px solid #fff' : '1px solid #264a60')};
  background: ${({ isColor }) => (isColor === 'white' ? '#fff' : '#264A60')};
  display: ${({ isDisplay }) => isDisplay || 'block'};
  justify-content: ${({ isJustify }) => isJustify || 'flex-start'};
`;

export default CalculatorCell;
