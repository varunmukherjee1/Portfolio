import React from 'react'
import styled from 'styled-components'

function Experience() {
  return (
    <MainContainer>
      <Container>

      </Container>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  
`

export default Experience