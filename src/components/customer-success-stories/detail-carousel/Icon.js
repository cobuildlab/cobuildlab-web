import styled from 'styled-components';

export const Icon = styled.img`
  width: 100%;
  height: auto;
`;

export const IconContainer = styled.div`
  width: auto;
  height: auto;
  &:before,
  &after {
    display: none;
  }
`;
