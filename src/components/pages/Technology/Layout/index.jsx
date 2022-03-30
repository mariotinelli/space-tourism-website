import React from "react";

import { Image, Name, DefaultText, Container, Index, Title, TitleContainer, Description} from "./styled";


const TechnologyLayout = ({ src, name, description }) => (
    <>
        <Container>
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
        </Container>
    </>
);

export default TechnologyLayout;
