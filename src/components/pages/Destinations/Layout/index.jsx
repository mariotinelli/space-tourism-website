import React from 'react'

import {Container, Description, Image, Link, Links, Name, Index, Title, TitleContainer, Text, Number, Information} from './styled'

const links = [
    'moon',
    'mars',
    'europa',
    'titan'
]

const Destinations = ({background, src, name, description, distance, time}) => (

    <>        
        <Container background={background}>  
            <TitleContainer>
                <Index> 01 </Index>
                <Title> PICK YOUR DESTINATION </Title>
            </TitleContainer>
            <Image src={src}/>
            <Links>
                {links.map((link) => (
                    <Link key={link} to={`/destinations/${link}`}> {link} </Link>
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

export default Destinations;