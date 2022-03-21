import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import * as faIcons from 'react-icons/fa'
import * as bsIcons from 'react-icons/bs'

import "./SideBar.css"

export const navBar = styled.div`
height: 100vh;
`

const SideBar = (props) => {
    //set state variables for collapsed and uncollapsed
    const [menuCollapsed, setmenuCollapsed] = useState(false);

    const menuIconClick = () =>{
        menuCollapsed ? setmenuCollapsed(false) : setmenuCollapsed(true);
    };

    if (props.themeColor === "light"){
        return (
            <navBar id="lightSidebar">
                <ProSidebar style = {{color: props.themeColor}}> 
                    <SidebarHeader>
                        <div onClick={menuIconClick} style = {{left: "2%"}}>
                            <Menu>
                                <MenuItem icon={<faIcons.FaBars />}>MENU</MenuItem>
                            </Menu>                    
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu style = {{color: props.themeColor}}>
                            <MenuItem icon={<faIcons.FaHome />}>
                                <NavLink to="/">
                                    HOME
                                </NavLink>
                            </MenuItem>
                            <MenuItem icon={<bsIcons.BsFillPersonFill />}>
                                <NavLink to="/about">
                                    ABOUT
                                </NavLink>
                            </MenuItem>
                            <MenuItem icon={<faIcons.FaList />}>
                                <NavLink to="/projects">PROJECTS</NavLink>
                            </MenuItem>
                            <MenuItem icon={<faIcons.FaGraduationCap />}>
                                <NavLink to="/skills">SKILLS</NavLink>
                            </MenuItem>
                            <MenuItem icon={<faIcons.FaPenFancy />}>
                                <NavLink to="/art">ART</NavLink>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </navBar> 
        )
    }

    return (
        <navBar id="darkSidebar">
            <ProSidebar style = {{color: props.themeColor}}> 
                <SidebarHeader>
                    <div onClick={menuIconClick} style = {{left: "2%"}}>
                        <Menu>
                            <MenuItem icon={<faIcons.FaBars />}>MENU</MenuItem>
                        </Menu>                    
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu style = {{color: props.themeColor}}>
                        <MenuItem icon={<faIcons.FaHome />}>
                            <NavLink to="/">
                                HOME
                            </NavLink>
                        </MenuItem>
                        <MenuItem icon={<bsIcons.BsFillPersonFill />}>
                            <NavLink to="/about">
                                ABOUT
                            </NavLink>
                        </MenuItem>
                        <MenuItem icon={<faIcons.FaList />}>
                            <NavLink to="/projects">PROJECTS</NavLink>
                        </MenuItem>
                        <MenuItem icon={<faIcons.FaGraduationCap />}>
                            <NavLink to="/skills">SKILLS</NavLink>
                        </MenuItem>
                        <MenuItem icon={<faIcons.FaPenFancy />}>
                            <NavLink to="/art">ART</NavLink>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </navBar>
    )
  }
  
  export default SideBar