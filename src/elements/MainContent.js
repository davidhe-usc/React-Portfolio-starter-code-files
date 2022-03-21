import styled from 'styled-components'

export const MainContainer = styled.div`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif;
  font-weight: 500;
}
`