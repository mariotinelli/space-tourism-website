import React from "react";

import { Image, ImageContainer, Name, Occupation, TitleContainer, Index, Title, Description, Container, TextContainer } from "./styled";


const CrewLayout = ({ src, occupation, name, description, maxWidth }) => (
    <>
        <Container>
            <TitleContainer>
                <Index>02</Index>
                <Title>MEET YOUR CREW</Title>
            </TitleContainer>
            <ImageContainer>
                <Image src={src} />
            </ImageContainer>
            <TextContainer>
                <Occupation> {occupation} </Occupation>
                <Name> {name} </Name>
                <Description maxWidth={maxWidth}>{description}</Description>
            </TextContainer>
        </Container>
    </>
);

export default CrewLayout;
