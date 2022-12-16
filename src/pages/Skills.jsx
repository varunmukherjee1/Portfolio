import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"

import Logo from '../components/Logo'
import HomeButton from '../components/HomeButton'
import SocialLinks from '../components/SocialLinks'
import ParticlesComp from '../components/ParticlesComp'

import skills from "../Assets/Data/skills"

function Skills() {
  return (
    <Container
      variants={container}
      initial = "hidden"
      animate = "show"
    >
      <Logo/>
      <HomeButton/>
      <SocialLinks/>
      <ParticlesComp theme = "light"/>

      <Box>
        <div>
          <h3>Languages :</h3>
          {skills.languages.map((icon,id) => (
            <img src= {icon} alt="lang" key = {id}/>
          ))}
        </div>
        <div>
          <h3>Framewords / Libraries</h3>
          {skills.lib.map((icon,id) => (
            <img src= {icon} alt="lang" key = {id}/>
          ))}
        </div>
        <div>
          <h3>Tools :</h3>
          {skills.tools.map((icon,id) => (
            <img src= {icon} alt="lang" key = {id}/>
          ))}
        </div>
        <div>
          <h3>Database :</h3>
          {skills.database.map((icon,id) => (
            <img src= {icon} alt="lang" key = {id}/>
          ))}
        </div>
      </Box>
    </Container>
  )
}

const Container = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100vw;
`

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 70vw;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &>div h3 {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-family: "Ubuntu Mono",monospace;
  }

  &>div img {
    height: 60px;
    object-fit: cover;
    margin: 0 0.8rem;
  }
`

// Framer-motion config
const container = {
  hidden: {
    opacity: 0,
    y: "100%"
  },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

export default Skills