import {
  Title,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
  color: #254a61 !important;
  margin-bottom: 1rem !important;
  font-size: 36px !important;
  font-weight: 'bold';
  font-family: 'Lato-Black', sans-serif !important;
`

const _H2 = (props) => (
  <StyledTitle isSize={2} tag={'h2'}>
    {props.children}
  </StyledTitle>
)

export { _H2 as H2Blue }
