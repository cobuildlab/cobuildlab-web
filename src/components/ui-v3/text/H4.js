import {
    Title,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
    width: 67px !important;
    height: 60px !important;
    text-align: left !important;
    font: Medium 50px/48px Lato !important;
    letter-spacing: 0 !important;
    color: #E76C29 !important;
    opacity: 1 !important;
`

const _H4 = ({ children, ...props }) => (
    <StyledTitle isSize={1} tag={'h4'} {...props}>
        {children}
    </StyledTitle>
)

export { _H4 as H4 }