import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion"

function Project(props) {
  return (
    <Card variants={Item}>
      <div>
        <img src={props.project.img} alt="Img" />
      </div>
      <Desc>
        <div>
          <h3>{props.project.title}</h3>
          <p>{props.project.desc}</p>
        </div>
        <div>
          {props.project.website !== '' && (
            <a href={props.project.website} target="_blank" rel="noreferrer">
              Website
            </a>
          )}
          <a href={props.project.github} target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </Desc>
    </Card>
  );
}

const Card = styled(motion.div)`
  border: 3px solid #8296e1;
  border-radius: 8px;
  overflow: hidden;
  display: block;
  min-width: 400px;
  /* min-height: 500px; */
  /* min-width: 300px; */
  gap: 1rem;
  padding: 1rem;
  box-shadow: 6px 6px 0px #8296e178;
  justify-content: space-between;
  /* padding: 8px; */
  margin-right: 30px;

  & > *:first-child {
    width: 100%;
    height: 197px;
    /* overflow: hidden; */
    display: inline-block;
    border: 1px solid silver;
  }

  & > *:first-child img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > *:first-child {
    display: flex;
    flex-direction: column;
  }

  & > *:first-child h3 {
    font-size: 1.5rem;
    margin-top: 15px;
    margin-bottom: 8px;
  }

  & > *:first-child p {
    font-size: 1.2rem;
    font-style: italic;
  }

  & > *:last-child {
    display: flex;
    gap: 12px;
  }

  & > *:last-child a {
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: 28px;
    margin-bottom: 5px;
    padding: 10px 40px;
    background: #8296e1;
    color: #fff;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
    border: 1px solid #838383;
    border-radius: 4px;
  }

  & > *:last-child a:hover {
    background: #6475b5;
  }
`;

const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5,
            dealy: 1
        }
    }
}

export default Project;
