import React from 'react';
import styled from 'styled-components';

import logoB2B from '../../../../assets/images/logos/IT_Services_Florida_2021.png';

const Images = styled.img`
  height: 200px;
`;

const B2BCompany = () => (
  <>
    <Images src={logoB2B} alt="B2B Logo" />
  </>
);

export default B2BCompany;
