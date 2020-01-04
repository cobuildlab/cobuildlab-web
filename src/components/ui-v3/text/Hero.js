import {
    Title,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
  width: 222px !important;
  height: 120px !important;
  text-align: left !important;
  font: Bold 100px/100px Lato !important;
  letter-spacing: 0 !important;
  color: #264A60 !important;
  opacity: 1 !important;
  `

const _H1 = ({ children, ...props }) => (
    <StyledTitle isSize={1} tag={'h1'} {...props}>
        {children}
    </StyledTitle>
)

export { _H1 as Hero }