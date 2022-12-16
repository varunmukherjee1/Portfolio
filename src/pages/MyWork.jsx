import React, {useState} from 'react'
import styled from 'styled-components'

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
        <Container>
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

const Container = styled.div`
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

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* border: 2px solid red; */
    height: 82vh;
    overflow: scroll;
    padding: 1rem;

    &::-webkit-scrollbar {
        display: none;
    }

    &>*:nth-child(even){
        align-self: flex-end;
        flex-direction: row-reverse;
        /* justify-content: space-between; */
    }

`

export default MyWork