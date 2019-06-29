import {
  Title,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
  color: #254a61 !important;
  margin-bottom: 1rem !important;
  font-size: 77px !important;
  font-family: 'Lato-Black', sans-serif !important;
`

const _H1 = (props) => (
  <StyledTitle isSize={1} tag={'h1'}>
    {props.children}
  </StyledTitle>
)

export { _H1 as H1 }
