import React from 'react'

import {Container, Description, Image, Link, Links, Name, Index, Title, TitleContainer, Text, Number, Information} from './styled'

const links = [
    'moon',
    'mars',
    'europa',
    'titan'
]

const LayoutDestinations = ({background, src, name, description, distance, time}) => (

    <>        
        <Container background={background}>  
            <TitleContainer>
                <Index> 01 </Index>
                <Title> PICK YOUR DESTINATION </Title>
            </TitleContainer>
            <Image src={src}/>
            <Links>
                {links.map((link) => (
                    <Link to={`/destinations/${link}`}> {link} </Link>
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

export default LayoutDestinations;