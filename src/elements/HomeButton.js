import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HomeButton = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;

padding: 0.5rem;
border-radius: 50%;
border-style: none;
font-size: 90;
width: 5rem;
height: 5rem;
background-color: transparent;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 3;

cursor: pointer;

transition: all 1s ease;

&:hover{
  background-color: ${props => props.invertColor? props.theme.highlightColor : props.theme.invertHighlightColor};
  color: ${props => props.invertColor? props.theme.invertHighlightColor : props.theme.highlightColor};
}
`