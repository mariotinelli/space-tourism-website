import React from 'react'

import {MenuComponent, Links, Number, Link} from './styled'

const Menu = ({children}) => (

    <>        
        <MenuComponent>  
            {children}              
            <Links>                
                <Link to="/"> 
                    <Number>00</Number> 
                    HOME 
                </Link>
                <Link to="/destinations/moon"> 
                    <Number>01</Number> 
                    DESTINATION 
                </Link>
                <Link to="/crew"> 
                    <Number>02</Number> 
                    CREW 
                </Link>
                <Link to="/technology"> 
                    <Number>03</Number> 
                    TECHNOLOGY 
                </Link>
            </Links>            
        </MenuComponent>        
    </>   
    
)

export default Menu;