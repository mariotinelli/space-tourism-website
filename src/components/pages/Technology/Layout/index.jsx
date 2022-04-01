import React from "react";

import { Image, Name, DefaultText, Container, Index, Title, TitleContainer, Description, TextContainer} from "./styled";


const TechnologyLayout = ({ name, description, imageMobile, imageDesktop }) => (
    <>
        <Container>
            
            <TitleContainer>
                <Index>03</Index>
                <Title>SPACE LAUNCH 101</Title>
            </TitleContainer>

            <Image imageMobile={imageMobile} imageDesktop={imageDesktop} />

            <TextContainer>

                <DefaultText> THE TERMINOLOGY </DefaultText>
                <Name> {name} </Name>
                <Description >
                    {description}
                </Description>

            </TextContainer>

        </Container>
    </>
);

export default TechnologyLayout;
