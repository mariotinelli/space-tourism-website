import React from 'react'

import {Container, Description, Image, Name, Index, Title, TitleContainer, Text, Number, Information, Data} from './styled'


const Destinations = ({background, src, name, description, distance, time}) => {

    return (
        <>        
            <Container background={background}>  
                <TitleContainer>
                    <Index> 01 </Index>
                    <Title> PICK YOUR DESTINATION </Title>
                </TitleContainer>
                <Image src={src}/>
                <Name> {name} </Name>
                <Description> {description} </Description>
                <Information>
                    <Data>
                        <Text> AVG. DISTANCE </Text>
                        <Number> {distance} </Number>
                    </Data>
                    <Data>
                        <Text> EST. TRAVEL TIME </Text>
                        <Number> {time} </Number>
                    </Data>
                </Information>
            </Container>        
        </>   
    )    
}

export default Destinations;