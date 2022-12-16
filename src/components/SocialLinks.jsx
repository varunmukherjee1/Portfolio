import React from 'react'
// import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { darkTheme } from '../styled/themes'

function SocialLinks(props) {
  return (
    <Icons>
        <motion.div
            initial = {{scale: 0}}
            animate = {{scale: [0,1,1.5,1]}}
            transition = {{type: "spring" , duration: 1, delay: 1}}
        >
            <a style = {{color: `${props.color === "dark"? darkTheme.text:darkTheme.body}`}} target = "_blank" rel="noreferrer" href = "https://github.com/varunmukherjee1">
                <i className="fa-brands fa-github"></i>
            </a>
        </motion.div>
        <motion.div
            initial = {{scale: 0}}
            animate = {{scale: [0,1,1.5,1]}}
            transition = {{type: "spring" , duration: 1, delay: 1.2}}
        >
            <a style = {{color: `${props.color === "dark"? darkTheme.text:darkTheme.body}`}} target = "_blank" rel="noreferrer" href = "https://codepen.io/varunmukherjee1">
                <i className ="fa-brands fa-codepen"></i>
            </a>
        </motion.div>
        <motion.div
            initial = {{scale: 0}}
            animate = {{scale: [0,1,1.5,1]}}
            transition = {{type: "spring" , duration: 1, delay: 1.4}}
        >
            <a style = {{color: `${props.color === "dark"? darkTheme.text:darkTheme.body}`}} target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/varun-mukherjee-a68a121ba/">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
        </motion.div>
        <motion.div
            initial = {{scale: 0}}
            animate = {{scale: [0,1,1.5,1]}}
            transition = {{type: "spring" , duration: 1, delay: 1.6}}
        >
            <a style = {{color: `${props.color === "dark"? darkTheme.text:darkTheme.body}`}} target = "_blank" rel="noreferrer" href = "https://leetcode.com/varunmukherjee/">
                <i className ="fa-solid fa-code"></i>
            </a>
        </motion.div>

        <Line 
            color = {props.color}
            initial = {{
                height: 0
            }}
            animate = {{
                height: "8rem"
            }}
            transition = {{
                type: "spring",
                duration: 1,
                delay: 0.8
            }}
        />
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
        font-size: 1.8rem;
    }

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`

const Line = styled(motion.span)`
    width: 3px;
    height: 8rem;
    background-color: ${props => props.color === "dark"? darkTheme.text:darkTheme.body};
`

export default SocialLinks