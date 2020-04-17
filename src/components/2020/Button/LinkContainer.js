import styled from 'styled-components';

const LinkContainer = styled.div`
  & > a {
    width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  }
`;

export default LinkContainer;
