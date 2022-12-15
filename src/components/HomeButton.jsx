import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function HomeButton() {
  return (
    <Power>
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

    background-color: #fcf6f4;
    padding: 0.3rem;
    /* border-radius: 50%; */
    /* border: 1px solid #000; */
    border: none;
    width: 2.8rem;
    font-size: 2.4rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;

    cursor: pointer;
    transition: all 0.5s;

    &:hover i {
        transform: scale(1.05);
    }

    &>*:first-child{
        text-decoration: none;
        color: black;
        transition: all 1s;
    }
`

export default HomeButton