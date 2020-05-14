import styled from 'styled-components';

const CalculatorFeatureCard = styled.div`
  width: 30%;
  height: 150px;
  border: ${({ isActive }) => (isActive ? '1px solid #E76C29' : '1px solid #406073')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease-out;
  color: ${({ isActive }) => (isActive ? '#E76C29' : '#406073')};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    color: #e76c29;
    border: 1px solid #e76c29;
  }
`;

export default CalculatorFeatureCard;
