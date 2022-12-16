import React from 'react'
import styled from 'styled-components'

function Job(props) {
  return (
    <Card>
        <div>
            <img src= {props.job.img} alt="Img" />
        </div>
        <Desc>
            <div>
                <h3>{props.job.title}</h3>
                <p>{props.job.company}</p>
            </div>
            <div>
                <a href = {props.job.website} target = "_blank" rel="noreferrer">Website</a>
            </div>
        </Desc>
        <Tag>
            <p>{props.job.tag}</p>
        </Tag>
    </Card>
  )
}

const Card = styled.div`

    border-radius: 8px;
    overflow: hidden;
    display: flex;
    width: 600px;
    min-width: 300px;
    gap: 1rem;
    padding: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
    justify-content: space-between;
    position: relative;

    &>*:first-child {
        width: 250px;
        height: 150px;
        overflow: hidden;
        display: inline-block;
    }

    &>*:first-child img {
        width: 250px;
        height: 150px;
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

const Tag = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 6px;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: #50D890;
    color: #EFFFFB;
    border-top-left-radius: 8px;
`

export default Job