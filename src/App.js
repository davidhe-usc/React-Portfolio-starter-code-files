import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

import Main from "./components/Main"
import AboutPage from "./components/AboutPage"
import ProjectsPage from "./components/ProjectsPage"
import ArtPage from "./components/ArtPage"
import SkillsPage from "./components/SkillsPage"

function App() {
  return <>

  <GlobalStyle />
    <ThemeProvider theme = {darkTheme}>
      <Switch>
        <Route exact path = "/" component = {Main}/>
        <Route exact path = "/about" component = {AboutPage}/>
        <Route exact path = "/projects" component = {ProjectsPage}/>
        <Route exact path = "/art" component = {ArtPage}/>
        <Route exact path = "/skills" component = {SkillsPage}/>
      </Switch>
    </ThemeProvider>  
  </>
    
}

export default App

