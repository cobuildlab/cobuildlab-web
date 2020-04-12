import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      type="text/javascript"
      key="https://widget.clutch.co/static/js/widget.js"
      src="https://widget.clutch.co/static/js/widget.js"
    />,
  ]);
};
