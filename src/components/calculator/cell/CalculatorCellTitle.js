import styled from 'styled-components';

const CalculatorCellTitle = styled.span`
  color: ${({ indigo }) => (indigo ? '#264a60' : '#fff')};
  font-size: 28px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export default CalculatorCellTitle;
