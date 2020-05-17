import styled from 'styled-components';

const CalculatorFeatureCard = styled.div`
  width: 140px;
  height: 135px;
  margin: 10px;
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
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 5px 0;
  }
`;

export default CalculatorFeatureCard;
