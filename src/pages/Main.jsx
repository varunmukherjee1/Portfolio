import React, { useState } from 'react'
import styled , {keyframes} from 'styled-components'
import { NavLink } from 'react-router-dom'
import {motion} from "framer-motion"

import HomeButton from '../components/HomeButton'
import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'
import Intro from '../components/Intro'
import mainImg from "../Assets/Images/domain.png"

function Main() {

  const [click,setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <MainContainer
      variants={container}
      initial = "hidden"
      animate = "show"
    >
      <Container>
        <HomeButton/>
        <Logo color = {click? "dark":"light"}/>
        <SocialLinks color = {click? "dark":"light"}/>

        <DarkDiv click = {click}/>

        <Center click = {click}>
          <div onClick = {handleClick} click = {click}>
            <img src={mainImg} alt="Img" />
          </div>
          <span>Click Here</span>
        </Center>

        <Contact to = "/contact">
          <motion.h3
            initial = {{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1}
            }}
            animate = {{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1}
            }}
            whileHover = {{scale: 1.1, fontWeight: 700, color: "#4F98CA"}}
            whileTap = {{scale: 0.9}}
          >
            Get In Touch...
          </motion.h3>
        </Contact>

        <Experience to = "/mywork">
          <motion.h3
            initial = {{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1}
            }}
            animate = {{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1}
            }}
            whileHover = {{scale: 1.1, fontWeight: 700, color: "#4F98CA"}}
            whileTap = {{scale: 0.9}}
          >
            My Work
          </motion.h3>
        </Experience>

        <BottomBar>
          <About click = {click} to = "/about">
            <motion.h3
              initial = {{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1}
              }}
              animate = {{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1}
              }}
              whileHover = {{scale: 1.1, fontWeight: 700, color: "#4F98CA"}}
              whileTap = {{scale: 0.9}}
            >
              About
            </motion.h3>
          </About>

          <Skills to = "/skills">
            <motion.h3
              initial = {{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1}
              }}
              animate = {{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1}
              }}
              whileHover = {{scale: 1.1, fontWeight: 700, color: "#4F98CA"}}
              whileTap = {{scale: 0.9}}
            >
              Skills
            </motion.h3>
          </Skills>
        </BottomBar>

        {click && <Intro click = {click}/>}

      </Container>
    </MainContainer>
  )
}

const MainContainer = styled(motion.div)`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,h3,h4,h5,h6 {
    font-family: "Karla",sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  /* text-decoration: none; */
  z-index: 1;
  font-size: 1.3rem;
  font-weight: 600;
`

const Experience = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  top: 50%;
  right: calc(1rem);
  transform: rotate(90deg) translate(-50%,-50%);
  text-decoration: none;
  z-index: 1;
  font-size: 1.3rem;
  font-weight: 600;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`

const About = styled(NavLink)`
  color: ${props => props.click? props.theme.body:props.theme.text};
  text-decoration: none;
  font-size: 1.3rem;
  z-index: 1;
`

const Skills = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-size: 1.3rem;
  z-index: 1;
`

const pulse = keyframes`
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(39, 39, 39, 0);
  }
    100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(39, 39, 39, 0);
  }
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click? "85%":"50%"};
  left: ${props => props.click? "92%":"50%"};;
  transform: translate(-50%,-50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  gap: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 1s ease;

  &>:last-child {
    display: ${props => props.click? "none":"inline-block"};
    font-size: 1.2rem;
    font-style: italic;
  }

  &>:first-child {
    display: block;
    /* line-height: ${props => props.click? "80px":"150px"}; */
    width: ${props => props.click? "80px":"150px"};
    height: ${props => props.click? "80px":"150px"};
    font-size: ${props => props.click? "2rem":"4rem"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #272727;
    color: #EFFFFB;
    cursor: pointer;
    box-shadow: 0 0 0 0 rgba(39, 39, 39, 0.5);
    /* box-shadow: 0 0 0 0 rgba(#272727, 0.5); */
    animation: ${pulse} 1.5s infinite;
  }

  &>:first-child img {
    width: 95%;
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #272727;
  width: ${props => props.click? "50%":"0%"};
  height: ${props => props.click? "100%":"0%"};
  z-index: 1;
  transition: height 0.5s ease,
              width 1s ease 0.5s;
`

// Framer-motion config
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

export default Main