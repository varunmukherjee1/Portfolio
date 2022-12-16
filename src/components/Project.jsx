import React from 'react'
import styled from 'styled-components'

function Project(props) {
  return (
    <Card>
        <div>
            <img src= {props.project.img} alt="Img" />
        </div>
        <Desc>
            <div>
                <h3>{props.project.title}</h3>
                <p>{props.project.desc}</p>
            </div>
            <div>
                {(props.project.website !== "") && <a href = {props.project.website} target = "_blank" rel="noreferrer">Website</a>}
                <a href = {props.project.github} target = "_blank" rel="noreferrer">Github</a>
            </div>
        </Desc>
    </Card>
  )
}

const Card = styled.div`

    border: 2px solid green;
    border-radius: 8px;
    overflow: hidden;
    display: block;
    width: 400px;
    height: 500px;
    /* min-width: 300px; */
    gap: 1rem;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
    justify-content: space-between;
    /* padding: 8px; */

    &>*:first-child {
        width: 100%;
        height: 300px;
        /* overflow: hidden; */
        display: inline-block;
    }

    &>*:first-child img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Desc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &>*:first-child{
        display: flex;
        flex-direction: column;
    }

    &>*:first-child h3 {
        font-size: 1.4rem;
    }

    &>*:first-child p {
        font-size: 1.2rem;
        font-style: italic;
    }

    &>*:last-child{
        display: flex;
        gap: 12px;
    }

    &>*:last-child a {
        text-decoration: none;
        font-size: 1.2rem;
    }
`

export default Project