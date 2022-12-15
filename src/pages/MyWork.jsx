import React, {useState} from 'react'
import styled from 'styled-components'

import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'
import HomeButton from '../components/HomeButton'

function MyWork() {

    const [tab,setTab] = useState("projects");

    const showProjects = () => {
        setTab("projects")
    }

    const showExp = () => {
        setTab("exp")
    }

    return (
        <div>
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

                </Body>
            </Tabs>
        </div>
    )
}

const Tabs = styled.div`
    display: flex;
    border: 2px solid red;
    position: absolute;
    top: 8rem;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80vw;
    height: auto;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;

    & h3 {
        border-bottom: 4px solid transparent;
        cursor: pointer;
        padding-bottom: 4px;
    }

    & h3:hover {
        color: #4F98CA;
        border-color: #4F98CA;
    }
`

const Body = styled.body`
    
`

export default MyWork