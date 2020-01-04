import {
    Title,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
    width: 108px !important;
    height: 96px !important;
    text-align: left !important;
    font: Bold 80px/98px Lato !important;
    letter-spacing: 0 !important;
    color: #264A60 !important;
    opacity: 1 !important;
`

const _H1 = ({ children, ...props }) => (
    <StyledTitle isSize={1} tag={'h1'} {...props}>
        {children}
    </StyledTitle>
)

export { _H1 as H1 }