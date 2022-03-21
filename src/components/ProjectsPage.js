import React, {useState} from 'react'
import styled from 'styled-components'

import { HomeButton } from '../elements/HomeButton'
import SocialIcons from '../components/SocialIcons'
import SideBar from '../elements/SideBar'
import { MainContainer } from '../elements/MainContent'
import { Logo } from '../components/SVGComponents'

import {HiMail} from 'react-icons/hi'

import Model from '../assets/Images/IMG_2928.PNG'

const ImageContainer = styled(MainContainer)`
background-image: url(${Model});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: right;
width: auto;
height: 100vh;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
width: 100%;
height: 100%;
position: relative;
`

const ProjectsPage = () => {
  const [buttonHovered, setbuttonHovered] = useState(false);

  return (
    <div>
        <ImageContainer>
          <Container>
            <SideBar />
            <SocialIcons />
            <HomeButton onMouseEnter={() => {setbuttonHovered(true)}} onMouseLeave={() => {setbuttonHovered(false)}} target="_blank" to={{pathname: "mailto:davidhe@usc.edu"}}>
              { (buttonHovered) ? 
                (<HiMail size='5x'/>) :
                (<Logo fill='currentColor' width={120} height={120}/>)
              }
            </HomeButton>
          </Container>
        </ImageContainer>
    </div>
  )
}

export default ProjectsPage