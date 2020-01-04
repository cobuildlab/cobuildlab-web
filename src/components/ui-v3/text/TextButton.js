import {
    Title,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
    width: 102px !important;
    height: 24px !important;
    text-align: left !important;
    font: Regular 20px/24px Lato !important;
    letter-spacing: 0 !important;
    color: #264A60 !important;
    opacity: 1 !important;
`

const _H5 = ({ children, ...props }) => (
    <StyledTitle isSize={1} tag={'h5'} {...props}>
        {children}
    </StyledTitle>
)

export { _H5 as TextButton }