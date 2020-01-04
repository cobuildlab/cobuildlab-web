import {
    Button,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    width: 140px !important;
    height: 42px !important;
    background: #FFFFFF 0% 0% no-repeat padding-box !important;
    text-align: center !important;
    font: Regular 20px/39px Lato !important;
    letter-spacing: 0.56px !important;
    border-width: 0px!important;
    text-transform: uppercase!important;
    color: #90A2AD !important;
    border-radius: 0px!important;
    border: 0px!important;
    
    &:hover {
        background: #FFFFFF 0% 0% no-repeat padding-box!important;
        box-shadow: 0px 5px 15px #2749606C!important;
        opacity: 1!important;
        color: #90A2AD!important;
    }

    &:active {
        background: #264A60 0% 0% no-repeat padding-box!important;
        box-shadow: 0px 5px 15px #2749606C!important;
        opacity: 1!important;
        text-align: center!important;
        font: Regular 20px/39px Lato!important;
        letter-spacing: 0.56px!important;
        color: #FFFFFF!important;
        opacity: 1!important;
    }
`

const _Btn = (props) => (
    <StyledButton>
        {props.children}
    </StyledButton>
)

export { _Btn as BtnCancel }