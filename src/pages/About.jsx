import React from 'react'
import styled, {keyframes, ThemeProvider } from 'styled-components'

import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'
import HomeButton from '../components/HomeButton'
import ParticlesComp from "../components/ParticlesComp"
import WaterMark from '../components/WaterMark'

import { darkTheme } from '../styled/themes'
import graphic from "../Assets/Images/spaceman.png"

function About() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <Container>
        <Logo color = "dark"/>
        <SocialLinks color = "dark"/>
        <HomeButton color = "dark"/>
        <ParticlesComp theme = "dark"/>

        <Gif>
          <img src={graphic} alt="Graphic" />
        </Gif>

        <Box>
          I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
          <br /><br />
          I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
          <br /><br />
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Box>

        <WaterMark text = "ABOUT" top = "7%" left = "7%"/>

      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  background-color: ${props => props.theme.body};
  height: 100vh;
  width: 100vw;
  position: relative;
`

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`

const Gif = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
`

const Box = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

export default About