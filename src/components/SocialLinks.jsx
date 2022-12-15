import React from 'react'
// import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { darkTheme } from '../styled/themes'

function SocialLinks(props) {
  return (
    <Icons>
        <div>
            <a style = {{color: `${props.color === "dark"? darkTheme.text:darkTheme.body}`}} target = "_blank" rel="noreferrer" href = "https://www.google.com/">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
        <div>
            <a style = {{color: `${props.color === "dark"? darkTheme.text:darkTheme.body}`}} target = "_blank" rel="noreferrer" href = "https://www.google.com/">
                <i className ="fa-brands fa-codepen"></i>
            </a>
        </div>
        <div>
            <a style = {{color: `${props.color === "dark"? darkTheme.text:darkTheme.body}`}} target = "_blank" rel="noreferrer" href = "https://www.google.com/">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
        </div>
        <div>
            <a style = {{color: `${props.color === "dark"? darkTheme.text:darkTheme.body}`}} target = "_blank" rel="noreferrer" href = "https://www.google.com/">
                <i className ="fa-solid fa-code"></i>
            </a>
        </div>

        <Line color = {props.color}/>
    </Icons>
  )
}

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 12px; */

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    &> div i {
        text-decoration: none;
        /* color: black; */
        font-size: 1.5rem;
        /* background-color: red; */
    }

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === "dark"? darkTheme.text:darkTheme.body};
`

export default SocialLinks