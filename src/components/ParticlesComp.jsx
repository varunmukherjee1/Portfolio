import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styled from 'styled-components'

import config_dark from "../Assets/Config/particlejs-config-dark"
import config_light from "../Assets/Config/particlejs-config-light"

function ParticlesComp(props) {

    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container)
    }, []);

    return (
        <Container>
            <Particles
                id = "tsparticles"
                init = {particlesInit}
                loaded = {particlesLoaded}
                options = {(props.theme === "light")? config_light:config_dark}
            />
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    z-index: 0;
`

export default ParticlesComp