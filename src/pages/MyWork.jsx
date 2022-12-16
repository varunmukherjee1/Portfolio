import React, { useRef, useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Logo from '../components/Logo';
import SocialLinks from '../components/SocialLinks';
import HomeButton from '../components/HomeButton';
import Project from '../components/Project';
import Job from '../components/Job';
import WaterMark from '../components/WaterMark';

import myWork from '../Assets/Data/myWork';
// import spinner from "../Assets/Images/spinner.png"

function MyWork() {
  const [tab, setTab] = useState('projects');

  // const spinRef = useRef();
  const scrollRef = useRef();

  const showProjects = () => {
    setTab('projects');
  };

  const showExp = () => {
    setTab('exp');
  };

  return (
    <Container variants={container} initial="hidden" animate="show">
      <Logo />
      <HomeButton />
      <SocialLinks />
      <WaterMark text = "WORK" top = "72%" left = "5rem"/>

      <Tabs>
        <Header>
          <h3
            className={`${tab === 'projects' ? 'active' : ''}`}
            onClick={showProjects}
          >
            Projects
          </h3>
          <h3
            className={`${tab === 'projects' ? '' : 'active'}`}
            onClick={showExp}
          >
            Expreience
          </h3>
        </Header>
        <Body ref = {scrollRef}>
          {tab === 'projects'
            ? myWork.projects.map((pj, idx) => (
                <Project project={pj} key={idx} />
              ))
            : myWork.experience.map((jb, idx) => <Job job={jb} key={idx} />)}
        </Body>
      </Tabs>

      {/* <Rotate ref = {spinRef}>
        <img src= {spinner} alt= "spinner" />
      </Rotate> */}
    </Container>
  );
}

const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid red; */
  position: fixed;
  top: 20rem;
  left: 50%;
  transform: translate(-50%, calc(-50% + 20px));
  width: 70vw;
  /* height: auto; */
  padding: 0.5rem;
`;

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
    color: #4f98ca;
    border-color: #4f98ca;
  }
`;

const Body = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 1rem;
  display: flex;
  width: auto;

  &::-webkit-scrollbar {
    /* display: none; */
  }

  /* width */
  &::-webkit-scrollbar {
    height: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #dcdcdc;
    border-radius: 99px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #272727;
    border-radius: 99px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #272727;
  }
`;

// Framer-motion config
const container = {
  hidden: {
    opacity: 0,
    x: '100%',
  },
  show: {
    opacity: 1,
    x: 0,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

// const Rotate = styled.div`
//     position: fixed;
//     bottom: 2%;
//     right: 2%;
//     width: 80px;

//     img {
//         width: 100%;
//         object-fit: contain;
//     }
// `

export default MyWork;
