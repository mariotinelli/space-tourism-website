import React from "react";
import {
  Description,
  Index,
  Title,
  TitleContainer,
} from "../../Destinations/Layout/styled";
import { Image, Name, DefaultText } from "./styled";


const TechnologyLayout = ({ src, name, description }) => (
    <>
        <TitleContainer>
            <Index>03</Index>
            <Title>SPACE LAUNCH 101</Title>
        </TitleContainer>

        <Image src={src} />

        <DefaultText> THE TERMINOLOGY </DefaultText>
        <Name> {name} </Name>
        <Description paddingInline="1.5rem" marginBottom="3.5rem">
            {description}
        </Description>
    </>
);

export default TechnologyLayout;
