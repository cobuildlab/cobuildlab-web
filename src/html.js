import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {object} props - Html props.
 * @returns {React.node} - React node.
 */
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/*}<!-- Replacement viewport meta tag (for AMP validity) -->*/}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link rel="preconnect" href="https://snap.licdn.com"></link>
        <link rel="preconnect" href="https://stats.g.doubleclick.net"></link>
        <link rel="preconnect" href="https://connect.facebook.net"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://www.facebook.com"></link>
        <link rel="preconnect" href="https://www.google-analytics.com"></link>
        <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        <script async src="https://cdn.ampproject.org/v0.js"></script>
      </body>
    </html>
  );
}

HTML.defaultProps = {
  htmlAttributes: {},
  headComponents: [],
  bodyAttributes: {},
  preBodyComponents: [],
  body: '',
  postBodyComponents: [],
};

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
