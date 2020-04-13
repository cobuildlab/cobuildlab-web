import H1 from '../Typography/H1';
import H2 from '../Typography/H2';
import H3 from '../Typography/H3';
import H4 from '../Typography/H4';
import H5 from '../Typography/H5';
import Paragraph from '../Typography/Paragraph';

import Styled from 'styled-components';

const CustomH1 = Styled(H1)`
  font-size: calc(32px + (50 - 37) * ((100vw - 320px) / (1920 - 320)));
  margin-bottom: 1.5rem;
`;

const CustomH2 = Styled(H2)`
  font-size: calc(26px + (32 - 26) * ((100vw - 320px) / (1920 - 320)));
  margin-bottom: 1.5rem;
`;

const CustomParagraph = Styled(Paragraph)`
  font-size: calc(25px + (18 - 16) * ((100vw - 320px) / (1920 - 320)));
`;

const Title = Styled(H3)`
  font-weight: bold;
  margin-bottom: 3rem;
`;

const SubTitle = Styled(H4)`
  font-weight: bold;
  margin-bottom: 2.5rem;
`;

const SubTitle2 = Styled(H5)`
  font-weight: bold;
  color: #264A60;
  font-size: calc(24px + (28 - 24) * ((100vw - 320px) / (1920 - 320)));
  margin-bottom: 1.5rem;
`;

export { CustomH1, CustomH2, CustomParagraph, Title, SubTitle, SubTitle2 };
