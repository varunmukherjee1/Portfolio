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
    border-radius: 48%;

    background-color: ${props => (props.color === "dark")? "#272727":"#EFFFFB"};
    padding: 0.3rem;
    /* border: 3px solid #272727; */
    border: none;
    /* width: 2.8rem; */
    font-size: 2.4rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;

    cursor: pointer;
    transition: all 0.5s;

    &>* i {
        color: ${props => (props.color === "dark")? "#EFFFFB":"#272727"};
        transition: all 0.5s;
        /* color: #effffb; */
    }

    &:hover i{
        transform: scale(1.09);
    }

    &>*:first-child{
        text-decoration: none;
        color: #272727;
        transition: all 1s;
    }
`

export default HomeButton