import React from 'react'
import styled from 'styled-components'

import Logo from '../components/Logo'
import HomeButton from '../components/HomeButton'
import SocialLinks from '../components/SocialLinks'
import ParticlesComp from '../components/ParticlesComp'

import skills from "../Assets/Data/skills"

function Skills() {
  return (
    <Container>
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

const Container = styled.div`
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
  gap: 1rem;

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

export default Skills