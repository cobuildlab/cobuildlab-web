import {
  Title,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
  color: #254a61 !important;
  margin-bottom: 1rem !important;
  font-size: 58px !important;
  font-weight: 'bold';
  font-family: 'Lato-Black', sans-serif !important;
`

export default (props) => (
  <StyledTitle isSize={2} tag={'h2'}>
    {props.children}
  </StyledTitle>
)
