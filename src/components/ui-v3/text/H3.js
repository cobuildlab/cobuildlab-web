import {
    Title,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
    width: 68px !important;
    height: 60px !important;
    text-align: left !important;
    font: Bold 50px/48px Lato !important;
    letter-spacing: 0 !important;
    color: #264A60 !important;
    opacity: 1 !important;
  `

const _H3 = ({ children, ...props }) => (
    <StyledTitle isSize={1} tag={'h3'} {...props}>
        {children}
    </StyledTitle>
)

export { _H3 as H3 }