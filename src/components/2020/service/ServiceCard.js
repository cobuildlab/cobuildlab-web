import styled from 'styled-components';

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 3rem 1rem;
  border-right: ${({ isBorder }) => (isBorder ? '1px solid #90a2ad' : 'none')};
  border-left: ${({ isBorder }) => (isBorder ? '1px solid #90a2ad' : 'none')};
  @media screen and (max-width: 768px) {
    border-right: none;
    border-left: none;
  }
`;

export default ServiceCard;
