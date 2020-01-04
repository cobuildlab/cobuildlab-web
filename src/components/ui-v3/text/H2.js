import {
    Title,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
    width: 80px !important;
    height: 72px !important;
    text-align: left !important;
    font: Light 60px/54px Lato !important;
    letter-spacing: 0 !important;
    color: #264A60 !important;
    opacity: 1 !important;
`

const _H2 = ({ children, ...props }) => (
    <StyledTitle isSize={1} tag={'h2'} {...props}>
        {children}
    </StyledTitle>
)

export { _H2 as H2 }