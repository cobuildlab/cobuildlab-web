import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';

const StickySection = () => {
  const [imagePosition, setImagePosition] = useState(-100);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      (e) => {
        if (document.scrollingElement.scrollTop > 300 && imagePosition !== 0) {
          setImagePosition(0);
        }
      },
      { passive: true },
    );
  });

  return (
    <div
      style={{
        transition: 'ease margin 700ms',
        marginTop: `${imagePosition}px`,
      }}>
      <StaticImage
        width={'1770'}
        height={'1180'}
        src={'../../assets/images/customers/collabtogrow/problem.png'}
        alt={'problem'}
      />
    </div>
  );
};

export default StickySection;
