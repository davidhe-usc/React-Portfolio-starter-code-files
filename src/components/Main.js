import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'

import { HomeButton } from '../elements/HomeButton'
import SocialIcons from '../components/SocialIcons'
import Intro from '../components/Intro'
import SideBar from '../elements/SideBar'
import { MainContainer} from '../elements/MainContent'
import { Logo } from '../components/SVGComponents'

import {HiMail} from 'react-icons/hi'
import { darkTheme, lightTheme } from './Themes'

const beating = keyframes`
0%, 50%{
  transform: scale(0.6);
}

100% {
  transform: scale(0.7);
}
`

const Landing = styled(HomeButton)`
color: ${props => props.theme.text};
top: ${props => props.buttonCollapsed ? '2rem' : '50%'};
right: ${props => props.buttonCollapsed ? 'calc(1rem + 2vw)' : '50%'};

transform: ${props => props.buttonCollapsed ? 'translate(0, 0)' : 'translate(50%, -50%)'};

width: ${props => props.buttonCollapsed ? '5rem' : '20rem'};
height: ${props => props.buttonCollapsed ? '5rem' : '20rem'};

&>:first-child{
  animation-name: ${beating};
  animation-duration: ${props => props.buttonCollapsed ? '0s' : '0.5s'};
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}
`

const LightDiv = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.buttonCollapsed ? '50%' : '0%'};
height: ${props => props.buttonCollapsed ? '100%' : '0%'};
background-color: ${props => props.theme.text};
color: ${props => props.theme.text};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const ImageContainer = styled(MainContainer)`
background-image: linear-gradient(300deg, #3D76BA 0%, #000000 70%);
`

const Main = (props) => {
  //set state variables for collapsed and uncollapsed
  const [buttonCollapsed, setbuttonCollapsed] = useState(false);
  const [buttonHovered, setbuttonHovered] = useState(false);

  const buttonClick = (e) =>{
    if (!buttonCollapsed){
      setbuttonCollapsed(true);
      e.preventDefault();
    } 
  };

  return (
    <ImageContainer>
      <LightDiv buttonCollapsed={buttonCollapsed}/>
      <SideBar themeColor={buttonCollapsed ? lightTheme : darkTheme} />
      <SocialIcons />
      <Landing buttonCollapsed={buttonCollapsed} onClick={buttonClick} onMouseEnter={() => {setbuttonHovered(true)}} onMouseLeave={() => {setbuttonHovered(false)}} target="_blank" to={buttonCollapsed ? {pathname: "mailto:davidhe@usc.edu"} : {}}>
        { (buttonCollapsed && buttonHovered) ? 
          (<HiMail size='5x'/>) :
          (<Logo fill='currentColor' width={buttonCollapsed ? 120 : 400} height={buttonCollapsed ? 120 : 400}/>)
        }
      </Landing>
      {buttonCollapsed ? <Intro buttonCollapsed = {buttonCollapsed} /> : null}
    </ImageContainer>
  )
}

export default Main