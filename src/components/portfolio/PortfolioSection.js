import { Section } from 'bloomer';
import styled from 'styled-components';

const SectionWrapper = styled(Section)`
  padding: 0 2.5em;
  background-color: ${({ color }) => (color === 'white' ? '#fff' : 'transparent')};
  @media screen and (max-width: 768px) {
    padding: 0 1em;
  }
`;

export default SectionWrapper;
