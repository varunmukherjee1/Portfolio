import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// import { darkTheme } from '../styled/themes'

function HomeButton(props) {
  return (
    <Power color = {props.color}>
        <Link to = "/">
            <i className ="fa-solid fa-house"></i>
        </Link>
    </Power>
  )
}

const Power = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;

    background-color: ${props => (props.color === "dark")? "#272727":"#EFFFFB"};
    padding: 0.45rem;
    border: none;
    font-size: 2.2rem;
    height: 3.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;

    cursor: pointer;
    transition: all 0.5s;

    &>* i {
        color: ${props => (props.color === "dark")? "#EFFFFB":"#272727"};
        transition: all 0.5s;
    }

    &:hover i{
        transform: scale(1.1);
    }

    &>*:first-child{
        text-decoration: none;
        color: #272727;
        transition: all 1s;
    }
`

export default HomeButton