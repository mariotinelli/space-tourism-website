import React from 'react'
import { useState } from 'react';
import { HeaderComponent, Icon, Logo, MenuToggle,MenuComponent, Links, Number, Link, Close, CloseIcon } from './styled'

const Header = () => {

    const [showMenuToggle, setShowMenuToggle] = useState(false);

    const handleClick = () => {
        setShowMenuToggle(!showMenuToggle);
    }

    return (
        <>
            <HeaderComponent>
                <Logo />
                <MenuToggle onClick={handleClick}>
                    <Icon />
                </MenuToggle>
                {showMenuToggle && (
                    <MenuComponent>  
                        <Close onClick={handleClick}>   
                            <CloseIcon /> 
                        </Close>              
                        <Links>                
                            <Link to="/" onClick={handleClick}> 
                                <Number>00</Number> 
                                HOME 
                            </Link>
                            <Link to="/destinations/moon" onClick={handleClick}> 
                                <Number>01</Number> 
                                DESTINATION 
                            </Link>
                            <Link to="/crew" onClick={handleClick}> 
                                <Number>02</Number> 
                                CREW 
                            </Link>
                            <Link to="/technology" onClick={handleClick}> 
                                <Number>03</Number> 
                                TECHNOLOGY 
                            </Link>
                        </Links>            
                    </MenuComponent>  
                )}
            </HeaderComponent>
        </>
    )

}

export default Header;