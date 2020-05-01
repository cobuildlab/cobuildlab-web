import styled from 'styled-components';

const SectionWrapper = styled.article`
  max-width: 1000px;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    padding-right: 1em;
    padding-left: 1em;
  }
`;

export default SectionWrapper;
