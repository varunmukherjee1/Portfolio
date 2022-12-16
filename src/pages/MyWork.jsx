import React, {useState} from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"

import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'
import HomeButton from '../components/HomeButton'
import Project from '../components/Project'
import Job from '../components/Job'

import myWork from "../Assets/Data/myWork"

function MyWork() {

    const [tab,setTab] = useState("projects");

    // console.log(myWork.projects)

    const showProjects = () => {
        setTab("projects")
    }

    const showExp = () => {
        setTab("exp")
    }

    return (
        <Container
            variants={container}
            initial = "hidden"
            animate = "show"
        >
            <Logo/>
            <HomeButton/>
            <SocialLinks/>
            <Tabs>
                <Header>
                    <h3 className = {`${(tab === "projects")? "active": ""}`} onClick = {showProjects}>
                        Projects
                    </h3>
                    <h3 className = {`${(tab === "projects")? "": "active"}`} onClick = {showExp}>
                        Expreience
                    </h3>
                </Header>
                <Body>
                    {(tab === "projects")? 
                        myWork.projects.map((pj,idx) => (
                            <Project project = {pj} key = {idx} />
                        ))
                        :
                        myWork.experience.map((jb,idx) => (
                            <Job job = {jb} key = {idx}/>
                        ))
                    }
                </Body>
            </Tabs>
        </Container>
    )
}

const Container = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    position: relative;
`

const Tabs = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 2px solid red; */
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translate(-50%,0);
    width: 70vw;
    /* height: auto; */
    padding: 0.5rem;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.3rem;
    margin-bottom: 1rem;

    & h3 {
        border-bottom: 4px solid transparent;
        cursor: pointer;
        padding-bottom: 4px;
        transition: all 0.2s;
    }

    & h3:hover,
    .active {
        color: #4F98CA;
        border-color: #4F98CA;
    }
`

const Body = styled.ul`
    height: 75vh;
    /* width: 80vw; */
    overflow: scroll;
    padding: 1rem;
    display: flex;
    width: auto;
    /* flex-direction: row; */
    /* gap: 2rem; */
    /* flex-grow: 1; */    

    &::-webkit-scrollbar {
        /* display: none; */
    }

`

// Framer-motion config
const container = {
    hidden: {
      opacity: 0,
      x:"100%",
    },
    show: {
      opacity: 1,
      x: 0,
  
      transition: {
        staggerChildren: 0.5,
        duration: 0.5
      }
    }
  }

export default MyWork