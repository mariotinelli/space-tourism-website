import React from 'react'
import { useState } from 'react';
import { HeaderComponent, Icon, Logo, MenuToggle,MenuComponent, Links, Number, Link, Close, CloseIcon, Line } from './styled'

import {NavLink} from 'react-router-dom'
import Home from '../pages/Home';

const Header = () => {

    const links = [
        {
            key: "00",
            to: "/",
            name: "HOME"
        },
        {
            key: "01",
            to: "/destinations",
            name: "DESTINATION"
        },
        {
            key: "02",
            to: "/crew",
            name: "CREW"
        },
        {
            key: "03",
            to: "/technology",
            name: "TECHNOLOGY"
        },
    ]

    const [showMenuToggle, setShowMenuToggle] = useState(false);

    const handleClick = () => {
        setShowMenuToggle(!showMenuToggle);        
    }

    return (
        <>
            <HeaderComponent>

                <Logo />
                <Line />

                <MenuToggle onClick={handleClick}>
                    <Icon />
                </MenuToggle>

                <MenuComponent display={showMenuToggle}>  
                    <Close onClick={handleClick}>   
                        <CloseIcon /> 
                    </Close>              
                    <Links>  
                        {links.map( (link) => (
                            <NavLink 
                                className="navlink"             
                                key={link.key} 
                                to={link.to} 
                                onClick={handleClick}
                            > 
                                <Number> {link.key} </Number> 
                                {link.name} 
                            </NavLink>
                        ))}              
                    </Links>            
                </MenuComponent> 
                
            </HeaderComponent>
        </>
    )

}

export default Header;