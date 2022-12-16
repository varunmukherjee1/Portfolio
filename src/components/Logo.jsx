import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { darkTheme } from '../styled/themes'

function Logo(props) {

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/")
  }

  return (
    <LogoSty color = {props.color} onClick = {clickHandler}>
        VM
    </LogoSty>
  )
}

const LogoSty = styled.h1`
    display: inline-block;
    color: ${props => props.color === "dark"? darkTheme.text:darkTheme.body};
    font-family: "Pacifico",cursive;
    cursor: pointer;

    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 3;
`

export default Logo