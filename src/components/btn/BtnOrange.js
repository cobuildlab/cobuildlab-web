import {
    Button,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
border-radius: 0px!important;
border: 0px!important;
box-shadow: 0px 8px 25px #E76C2999;
text-transform: uppercase;
font-size: 1.25rem;
background-color: #e76c29 !important;
color: #fff;
padding-left: 2.75em;
padding-right: 2.75em;
margin-top: 15px!important;

&:hover {
    background-color: #254a61 !important;
    color: #fff;
    box-shadow: none;
  }
`

const _Btn = (props) => (
    <StyledButton onClick={e => props.onSubmitModal(e)}>
        {props.children}
    </StyledButton>
)

export { _Btn as BtnOrange }