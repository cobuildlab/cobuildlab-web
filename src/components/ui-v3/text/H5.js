import {
    Title,
} from 'bloomer'

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
width: 43px;
height: 39px;
text-align: left;
font: Bold 32px/25px Lato;
letter-spacing: 0;
color: #264A60;
opacity: 1;
  `

const _H5 = ({ children, ...props }) => (
    <StyledTitle isSize={1} tag={'h5'} {...props}>
        {children}
    </StyledTitle>
)

export { _H5 as H5 }