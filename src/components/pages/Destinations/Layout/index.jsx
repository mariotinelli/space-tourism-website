import React from 'react'
import { NavLink } from 'react-router-dom';

import {Container, Description, Image, Links, Name, Index, Title, TitleContainer, Text, Number, Information} from './styled'

const links = [
    'moon',
    'mars',
    'europa',
    'titan'
]

const Destinations = ({background, src, name, description, distance, time}) => {

    return (
        <>        
            <Container background={background}>  
                <TitleContainer>
                    <Index> 01 </Index>
                    <Title> PICK YOUR DESTINATION </Title>
                </TitleContainer>
                <Image src={src}/>
                <Links>
                    {links.map((link) => (
                        <NavLink
                            className="navlink"
                            style={({ isActive }) => {
                                return {
                                    fontFamily: "Barlow Condensed",
                                    fontSize: "0.875rem",
                                    fontWeight: 400,
                                    letterSpacing: "0.1477rem",
                                    textTransform: "uppercase",
                                    textDecoration: "none",
                                    paddingBottom: "0.5rem",
                                    color: isActive ? "#FFF" : "#D0D6F9",
                                    borderBottom: isActive ? "3px solid #FFF" : "",
                                }
                            }}
                            key={link} 
                            to={`/destinations/${link}`}> 
                                {link} 
                        </NavLink>
                    ))}
                </Links>
                <Name> {name} </Name>
                <Description> {description} </Description>
                <Information>
                    <Text> AVG. DISTANCE </Text>
                    <Number> {distance} </Number>
                    <Text> EST. TRAVEL TIME </Text>
                    <Number> {time} </Number>
                </Information>
            </Container>        
        </>   
    )    
}

export default Destinations;