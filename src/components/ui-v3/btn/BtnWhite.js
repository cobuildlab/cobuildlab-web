import {
    Button,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
color: rgb(118, 132, 141);
border-width: 0px;
text-transform: uppercase;
font-size: 1.25rem;
margin-top: 15px!important;

&:hover {
    color: rgb(118, 132, 141);
  }
`

const _Btn = (props) => (
    <StyledButton onClick={() => props.handleModal(false)}>
        {props.children}
    </StyledButton>
)

export { _Btn as BtnWhite }