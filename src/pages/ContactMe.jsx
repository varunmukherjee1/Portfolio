import React,{useRef} from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

import Logo from "../components/Logo"
import SocialLinks from "../components/SocialLinks"
import HomeButton from "../components/HomeButton"

import emailPng from "../Assets/Images/email.png"

function ContactMe() {

  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_514ero9', 'template_63tvkg7', formRef.current, 'YPOOIhotcYf6qgxV0')
      .then((result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully")
          
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
      }, (error) => {
          console.log(error.text);

          toast.error("Something went Wrong")
      });
  };

  return (
    <Container>

      <Logo/>
      <SocialLinks/>
      <HomeButton/>

      <motion.img 
        src= {emailPng} 
        alt="email" 

        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition = {{type: "spring", duration: 1.5, delay: 0.5}}      
      />

      <Box
        initial = {{height: 0}}
        animate = {{height: "63vh"}}
        transition = {{type: "spring", duration: 1.5, delay: 0}}
      >

        <form ref = {formRef} onSubmit = {sendEmail}>
          <div>
            <label htmlFor="name">Name :</label>
            <input ref = {nameRef} type="text" name = "user_name" placeholder="Full Name" id = "name" required/>
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input ref = {emailRef} type="email"  id = "email" name = "user_email" placeholder='Email' required/>
          </div>
          <div>
            <label htmlFor="message">Message :</label>
            <textarea ref = {messageRef} name="message" placeholder='Message' id="message" cols="30" rows="10"></textarea>
          </div>

          <button type="submit">SEND</button>
        </form>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};

  img {
    width: 70px;
    position: absolute;
    left: 50%;
    top: 13%;
    transform: translate(-50%,-0%);
    z-index: 1;
  }
`

const Box = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: 3px solid ${props => props.theme.text};
  width: 60vw;
  height: 63vh;
  border-radius: 10px;
  padding: 1.3rem;
  background-color: #fff;
  font-family: "Ubuntu Mono",monospace;
  overflow: hidden;

  form {
    width: 100%;
    font-size: 1.3rem;
  }

  form div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    gap: 9px;
    /* align-items: flex-start; */
  }

  form div input,
  form div textarea{
    font-size: 1.3rem;
    padding: 3px 5px;
    font-family: "Ubuntu Mono",monospace;
  }

  button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    outline: none;
    font-size: 1.5rem;
    background-color: #4F98CA;
    color: #EFFFFB;
    font-family: "Ubuntu Mono",monospace;
    font-weight: bold;
    padding: 8px 1rem;
    letter-spacing: 2px;
    border-radius: 10px;
    border: 3px solid transparent;
  }

  button:hover {
    border-color: #272727;
  }
`

export default ContactMe