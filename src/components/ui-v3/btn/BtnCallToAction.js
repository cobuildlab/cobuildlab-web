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
    background: #E76C29 0% 0% no-repeat padding-box !important;
    box-shadow: 0px 8px 25px #E76C2999 !important;
    color: #FFFFFF !important;
    border-radius: 0px!important;
    border: 0px!important;

    &:hover {
        background: #D05B1B 0% 0% no-repeat padding-box !important;
        box-shadow: 0px 5px 10px #D15F2099 !important;
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

export { _Btn as BtnCallToAction }