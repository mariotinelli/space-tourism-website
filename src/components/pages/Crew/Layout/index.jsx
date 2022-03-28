import React from "react";
import {
  Description,
  Index,
  Title,
  TitleContainer,
} from "../../Destinations/Layout/styled";
import { Image, ImageContainer, Name, Occupation } from "./styled";


const CrewLayout = ({ src, occupation, name, description }) => (
    <>
        <TitleContainer>
            <Index>02</Index>
            <Title>MEET YOUR CREW</Title>
        </TitleContainer>
        <ImageContainer>
            <Image src={src} />
        </ImageContainer>
        <Occupation> {occupation} </Occupation>
        <Name> {name} </Name>
        <Description marginBottom="6.5rem">{description}</Description>
    </>
);

export default CrewLayout;
