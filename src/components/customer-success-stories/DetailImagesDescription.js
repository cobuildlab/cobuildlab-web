import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  margin-top: 2.5em;
  display: block;
  box-shadow: 0px 15px 30px #00000040;
`;

const DetailImagesDescription = ({ src }) => <Image src={src} alt="" />;

DetailImagesDescription.propTypes = {
  src: PropTypes.string.isRequired,
};

export default DetailImagesDescription;
