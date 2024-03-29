import React from 'react'
import styled, {keyframes, ThemeProvider } from 'styled-components'
import { motion} from 'framer-motion'

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
      <Container
        variants={container}
        initial = "hidden"
        animate = "show"
      >
        <Logo color = "dark"/>
        <SocialLinks color = "dark"/>
        <HomeButton color = "dark"/>
        <ParticlesComp theme = "dark"/>

        <Gif>
          <img src={graphic} alt="Graphic" />
        </Gif>

        <Box>
          Imagine a developer who doesn't just build websites and tools, but crafts experiences that leave users in awe -that's me! 😁
          <br /><br />
          I'm not just a Full Stack Developer; I'm a tech enthusiast. I've spent over a year in the dynamic world of web development, honing my skills to deliver seamless, user-centric solutions.<br/>
          I love to watch Anime 😅 and read Books.
          <br /><br />
          I believe in the constant pursuit of growth, pushing myself to exceed my limits. 
          <br />
          "🚩 Better Than Yesterday"
        </Box>

        <WaterMark text = "ABOUT" top = "7%" left = "7%"/>

      </Container>
    </ThemeProvider>
  )
}

const Container = styled(motion.div)`
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

const Gif = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
  }
`

const Box = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 62vw;
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

  @media(max-width: 600px){
    left: 50%;
    transform: translateX(-50%);
    width: 70vw;
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

export default About