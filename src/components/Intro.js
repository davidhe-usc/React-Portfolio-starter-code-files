import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Me from '../assets/Images/Salter Export I Alt.png'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 55vw;
height: 60vh;
display: flex;

background-repeat: no-repeat;
background: transparent;

border: 5px solid transparent;
border-image: linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.text} 50%);
border-image-slice: 1;
z-index: 1;
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)` };
    font-size: calc(0.5em + 1.5vw);
    font-weight: 350;
}
`

const Intro = () => {
  return (
    <Box initial={{height: 0, opacity: 0}} animate={{height:'60vh', opacity: 1}} transition={{type: 'spring', duration: 2, delay: 1}}>
        <SubBox>
            <Text>
                <h1>Hello there</h1>
                <h2>I'm David,</h2>
                <h6>and I'm an aspiring Technical Artist.</h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 2}}>
                <img className = "pic" src = {Me} alt="Profile Pic" />
            </motion.div>
        </SubBox>
    </Box>
  )
}

export default Intro