import React from 'react'
import styled from 'styled-components'
import logo from '../../resources/icons/gear.svg'

const StyleNewsletter = styled.label`    
    left: 60px;
    font-family: Light!imnportant;
    font-size: 42px;
    color: rgb(38, 74, 96);
    position: inherit;    
`

const _Label = (props) => (
    <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
        <img src={logo} alt="Cobuild"></img>        
        <StyleNewsletter>
            {props.children}
        </StyleNewsletter>
    </div>
)

export { _Label as NewsletterLayout }