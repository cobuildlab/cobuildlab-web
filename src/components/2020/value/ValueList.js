import styled from 'styled-components';

export const ValueList = styled.ul`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: ${({ isLeft }) => (isLeft ? 'flex' : 'block')};
  flex-direction: column;
  align-items: flex-end;
`;

export const ValueListItem = styled.li`
  color: #264a60;
  padding: 0.25rem 0;
`;
