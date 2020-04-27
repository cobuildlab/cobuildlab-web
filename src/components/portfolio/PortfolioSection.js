import { Section } from 'bloomer';
import styled from 'styled-components';

const SectionWrapper = styled(Section)`
  padding-right: 2.5em;
  padding-left: 2.5em;
  padding-top: 3em;
  background-color: ${({ color }) => (color === 'white' ? '#fff' : 'transparent')};
  @media screen and (max-width: 768px) {
    padding-right: 1em;
    padding-left: 1em;
  }
`;

export default SectionWrapper;
