import React, { useState, useEffect } from 'react';
import PreviewIcon from '../../components/icon';
import { caretUp } from 'react-icons-kit/fa/caretUp';
import './scroll.scss';

/**
 *
 * @returns {*} - The Scroll Component.
 * @class
 */
export default function Scroll() {
  const [showClass, setshowClass] = useState(false);

  useEffect(() => {
    const scrollHandle = () => {
      let scoll = null;
      if (window.scrollY < 250) {
        scoll = false;
      } else {
        scoll = true;
      }
      setshowClass(scoll);
    };
    window.addEventListener('scroll', scrollHandle, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollHandle, { passive: true });
    };
  }, []);

  const scrollTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-to-top">
      <div
        id="bottom-to-top"
        onClick={() => scrollTop()}
        title="Back to top"
        className={showClass ? 'show' : ''}>
        <div className="scroll-icon-link gradient-color">
          <PreviewIcon icon={caretUp} />
        </div>
      </div>
    </div>
  );
}
