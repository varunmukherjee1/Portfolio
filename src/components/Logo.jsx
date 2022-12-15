import React from 'react'
import styled from 'styled-components'

import { darkTheme } from '../styled/themes'

function Logo(props) {
  return (
    <LogoSty color = {props.color}>
        VM
    </LogoSty>
  )
}

const LogoSty = styled.h1`
    display: inline-block;
    color: ${props => props.color === "dark"? darkTheme.text:darkTheme.body};
    font-family: "Pacifico",cursive;

    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 3;
`

export default Logo