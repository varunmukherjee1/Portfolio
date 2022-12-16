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
  transform: translate(-50%,calc(-50% + 25px));
  width: 70vw;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &>div {
    /* background: transparent; */
    border: 3px solid #8296e1;
    padding: 12px 30px;
    border-radius: 10px;
    box-shadow: 6px 6px 0px rgba(130, 150, 225, 0.47);
    background: #ffffff94;
    backdrop-filter: blur(9px);
  }

  &>div h3 {
    display: block;
    margin-bottom: 1.2rem;
    font-size: 1.4rem;
    font-family: "Ubuntu Mono",monospace;
  }

  &>div img {
    height: 50px;
    object-fit: cover;
    margin: 0 1.5rem;
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