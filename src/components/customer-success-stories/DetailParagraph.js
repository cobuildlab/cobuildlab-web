import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../Typography/Paragraph';

const Text = styled(Paragraph)`
  line-height: 1.4;
  text-align: justify;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  & > a {
    color: #e76c29;
  }
`;

const DetailParagraph = ({ children, isBold }) => (
  <Text style={{ fontWeight: isBold ? 'bold' : 'normal' }}>{children}</Text>
);

DetailParagraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isBold: PropTypes.bool,
};

DetailParagraph.defaultProps = { isBold: false };

export default DetailParagraph;
