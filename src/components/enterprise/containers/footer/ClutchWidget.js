import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 1em;
  padding-left: 0.5em;
  height: 60px;
`;

const ClutchWidget = () => {
  return (
    <Container>
      <div
        className="clutch-widget"
        data-url="https://widget.clutch.co"
        data-widget-type="1"
        data-height="50"
        data-clutchcompany-id="615903"></div>
    </Container>
  );
};

export default ClutchWidget;
