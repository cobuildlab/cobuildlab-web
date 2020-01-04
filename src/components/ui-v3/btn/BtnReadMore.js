import {
    Button,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    text-align: center !important;
    font: Regular 20px/24px Lato !important;
    letter-spacing: 0 !important;
    opacity: 1 !important;
    width: 170px !important;
    height: 42px !important;
    color: #264A60 !important;
    border-width: 0px;

    &:hover {      
        color: #E76C29 !important;
    }

    &:active {
        text-align: center !important;
    }
`

const _Btn = (props) => (
    <StyledButton>
        {props.children}
    </StyledButton>
)

export { _Btn as BtnReadMore }