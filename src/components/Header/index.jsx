import React from 'react'
import { useState } from 'react';
import Menu from './Menu';
import { Close, CloseIcon } from './Menu/styled';
import { HeaderComponent, Icon, Logo, MenuToggle } from './styled'

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
                    <Menu> 
                        <Close 
                            onClick={handleClick}>   <CloseIcon /> 
                        </Close> 
                    </Menu>
                )}
            </HeaderComponent>
        </>
    )

}

export default Header;