import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import * as faIcons from 'react-icons/fa'

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color:${props => props.invertColor ? props.theme.body : props.theme.text};

position: fixed;
bottom: 0;
right: 2rem;
font-size: 36pt;

z-index: 3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled.span`
width: 5px;
height: 10rem;
background-color: ${props => props.theme.text};
`

const IconLink = styled(NavLink)`
color: inherit;

&>*:hover{
    color: ${props => props.invertColor ? props.theme.invertHighlightColor : props.theme.highlightColor};
}
`

const SocialIcons = (props) => {
  return (
    <Icons invertColor = {props.invertColor}>
        <div>
            <IconLink target = "_blank" to = {{pathname:"https://www.linkedin.com/in/davidhe2-662928309/"}}>
                <faIcons.FaLinkedin/>
            </IconLink>
        </div>
        <div>
            <IconLink target = "_blank" to = {{pathname:"https://github.com/davidhe-usc"}}>
                <faIcons.FaGithub/>
            </IconLink>
        </div>
        <div>
            <IconLink target = "_blank" to = {{pathname:"https://www.facebook.com/david.he.9862/"}}>
                <faIcons.FaFacebook/>
            </IconLink>
        </div>
        <div>
            <IconLink target = "_blank" to = {{pathname:"https://www.artstation.com/davidhe1"}}>
                <faIcons.FaArtstation/>
            </IconLink>
        </div>
        <Line />
    </Icons>
  )
}

export default SocialIcons