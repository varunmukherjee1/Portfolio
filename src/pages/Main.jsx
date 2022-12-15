import React, { useState } from 'react'
import styled , {keyframes} from 'styled-components'
import { NavLink } from 'react-router-dom'
import {motion} from "framer-motion"

import HomeButton from '../components/HomeButton'
import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'
import { YinYang } from '../components/SVG_Components'
import Intro from '../components/Intro'

function Main() {

  const [click,setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <MainContainer>
      <Container>
        <HomeButton/>
        <Logo color = {click? "dark":"light"}/>
        <SocialLinks color = {click? "dark":"light"}/>

        <DarkDiv click = {click}/>

        <Center click = {click}>
          <YinYang onClick = {handleClick} width = {click? 100:200} height = {click? 100:200} fill = "currentColor"/>
          <span>Click Here</span>
        </Center>

        <Contact to = "/contact">
          <motion.h3
            whileHover = {{scale: 1.1}}
            whileTap = {{scale: 0.9}}
          >
            Get In Touch...
          </motion.h3>
        </Contact>

        <Experience to = "/">
          <motion.h3
            whileHover = {{scale: 1.1}}
            whileTap = {{scale: 0.9}}
          >
            Experience
          </motion.h3>
        </Experience>
        
        <Work click = {click} to = "/projects">
          <motion.h3
            whileHover = {{scale: 1.1}}
            whileTap = {{scale: 0.9}}
          >
            My Work
          </motion.h3>
        </Work>

        <BottomBar>
          <About click = {click} to = "/about">
            <motion.h3
              whileHover = {{scale: 1.1}}
              whileTap = {{scale: 0.9}}
            >
              About
            </motion.h3>
          </About>

          <Skills>
            <motion.h3
              whileHover = {{scale: 1.1}}
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

const MainContainer = styled.div`
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
  text-decoration: none;
  z-index: 1;
  /* font-family: "Karla",sans-serif; */
  font-size: 1rem;
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
  /* font-family: "Karla",sans-serif; */
  font-size: 1rem;
  font-weight: 600;
`

const Work = styled(NavLink)`
  color: ${props => props.click? props.theme.body:props.theme.text};
  position: absolute;
  top: 2rem;
  top: 45%;
  left: 1rem;
  transform: rotate(-90deg) translate(-50%,-50%);
  transform-origin:center;
  text-decoration: none;
  z-index: 1;
  /* font-family: "Karla",sans-serif; */
  font-size: 1rem;
  font-weight: 600;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`

const About = styled(NavLink)`
  color: ${props => props.click? props.theme.body:props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const Skills = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
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
    /* padding-top: 1rem; */
    display: ${props => props.click? "none":"inline-block"};
  }

  &>:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: black;
  width: ${props => props.click? "50%":"0%"};
  height: ${props => props.click? "100%":"0%"};
  z-index: 1;
  transition: height 0.5s ease,
              width 1s ease 0.5s;
`

export default Main