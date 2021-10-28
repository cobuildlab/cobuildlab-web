import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StickySection = ({ children }) => {
  const [imagePosition, setImagePosition] = useState(-100);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (document.scrollingElement.scrollTop > 300 && imagePosition !== 0) {
        setImagePosition(0);
      }
    });
  });

  return (
    <div
      style={{
        transition: 'ease margin 700ms',
        marginTop: `${imagePosition}px`,
      }}>
      {children}
    </div>
  );
};

StickySection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default StickySection;
