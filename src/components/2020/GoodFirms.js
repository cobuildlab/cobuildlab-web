import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: 1em;
`;

const Images = styled.img`
  width: 100%;
`;

const GoodFirms = () => (
  <Container>
    <a
      target="_blank"
      href="https://www.goodfirms.co/company/cobuild-lab-inc"
      rel="noreferrer noopener">
      <Images
        src="https://assets.goodfirms.co/categories/goodfirms-blue.svg"
        alt="GoodFirms Badge"
      />
    </a>
  </Container>
);

export default GoodFirms;
