import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import {motion} from "framer-motion"

// import myPic from "../Assets/Images/profile-img.png"
import myPic_1 from "../Assets/Images/my_pic.png"

function Intro() {
  return (
    <Box
        initial = {{height: 0}}
        animate = {{height: "55vh"}}
        transition = {{type: "spring", duration: 2, delay: 1}}
    >
        <SubBox>
            <Text
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{type: "spring",duration: 0.5, delay: 1.5}}
            >
                <h1>Hi,</h1>
                <h3>I'm Varun Mukherjee</h3>
                <h6>
                    <div>I am,</div>
                    <Typewriter
                        options={{
                            strings: ['Full Stack Developer','Exploring AI','Web 3 Enthusiast'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h6>

            </Text>
            
            <motion.div 
                className = "button-container"
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{type: "spring",duration: 0.5, delay: 1.5}}
            >
                <a href="https://drive.google.com/file/d/1TGGje9bRQrghPsaSgYEqa2UfL9yL5HrO/view?usp=sharing" target= "_blank" rel="noreferrer"> My Resume</a>
            </motion.div>
        </SubBox>
        <SubBox>
            <motion.div
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{duration: 1, delay: 2}}
            >
                <img src={myPic_1} className = "pic" alt="Profile Pic" />
            </motion.div>
        </SubBox>
    </Box>
  )
}

const Box = styled(motion.div)`
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    width: 65vw;
    height: 55vh;
    display: flex;

    
    // below gradient is to create 2 color border
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
            to right,
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50%) top;
            
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index: 1;
        
`

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    .pic{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0%);
        width: 85%;
        height: auto;
    }

    .button-container {
        display: flex;
        justify-content: center;
    }

    .button-container a {
        text-decoration: none;
        color: ${props => props.theme.text};
        background-color: ${props => props.theme.body};
        padding: 10px 2.2rem;
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 1rem;
        border-radius: 6px;
        transition: all 0.5s;
        margin-top: 1.6rem;
        box-shadow: 1px 1px 4px rgba(0,0,0,0.12);

    }

    .button-container a:hover {
        background-color: #343434;
        color: ${props => props.theme.body};
        transform: scale(1.1);
    }

    &>*:first-child{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

const Text = styled(motion.div)`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child{
        color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
        font-weight: 500;
        font-size: calc(0.5rem + 1.5vw);
        display: flex;
        gap: 3px;
    }

    h6>div:last-child {
        color: #8296e1;
    }

`

export default Intro