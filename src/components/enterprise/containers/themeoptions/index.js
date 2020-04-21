import React from 'react';
import Nextjs from '../../../../assets/images/framework/next-js.svg';
import Html from '../../../../assets/images/framework/html-5.svg';

const ThemeOption = () => {
  return (
    <div id="framework-button">
      <a
        rel="noopener noreferrer"
        href="https://themeforest.net/item/busline-react-next-business-landing-page/25270135"
        target="_blank">
        <span>
          <img src={Nextjs} alt="Nextjs" title="Nextjs" />
        </span>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://themeforest.net/item/busline-business-landing-page-html-rtl/25581077"
        target="_blank">
        <span>
          <img src={Html} alt="Html" title="Html" />
        </span>
      </a>
    </div>
  );
};

export default ThemeOption;
