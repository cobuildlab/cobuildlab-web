import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../Typography/Paragraph';

const Text = styled(Paragraph)`
  line-height: 1.4;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  & > a {
    color: #e76c29;
  }
`;

const DetailParagraph = ({ children }) => <Text>{children}</Text>;

DetailParagraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DetailParagraph;
