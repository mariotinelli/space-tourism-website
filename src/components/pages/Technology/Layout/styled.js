import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 4rem;
    background: url("/public/assets/technology/background-technology-mobile.jpg") no-repeat;
    background-size: 100vw 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width : 768px) {
        padding-top: 6rem;
        background: url("/public/assets/technology/background-technology-tablet.jpg") no-repeat;
        background-size: 100vw 100%;
        height: 100%;
        padding-inline: 2.4375rem;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.125rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;

    @media only screen and (min-width : 768px) {
        margin-top: 2.5rem;
        margin-bottom: 3.75rem;
        align-self: flex-start;
    }
`;

export const Index = styled.p`
    color: var(--title-destinations);    
    font-family: 'Barlow Condensed', sans-serif;
    font-size: var(--font-2);
    font-weight: 700;
    letter-spacing: 0.1688rem;

    @media only screen and (min-width : 768px) {
        font-size: var(--font-1);
        letter-spacing: 0.2109rem;
    }
`;

export const Title = styled(Index)`
    color: var(--white-color);
    font-weight: 400;
`;

export const Image = styled.img`
    height: 10.625rem;
    width: 102vw;

    @media only screen and (min-width : 768px) {
        height: 19.375rem;
    }
`;

export const DefaultText = styled.p`
    margin-top: 6.25rem;
    font-family: "Barlow Condensed", sans-serif;
    font-size: var(--font-3);
    font-weight: 400;
    color: var(--text-color);
    letter-spacing: 0.1477rem;
    text-transform: uppercase;

    @media only screen and (min-width : 768px) {
        margin-top: 10rem;
        font-size: var(--font-2);
        letter-spacing: 0.1688rem;
    }
`;

export const Name = styled.p`
    margin-top: 0.5625rem;
    margin-bottom: 1rem;
    font-family: "Bellefair", sans-serif;
    font-size: var(--font-7);
    font-weight: 400;
    color: var(--white-color);
    text-transform: uppercase;

    @media only screen and (min-width : 768px) {
        margin-top: 1rem;
        font-size: var(--font-11);
    }
`;


export const Description = styled.p`
    font-family: 'Barlow', sans-serif;
    font-size: var(--font-5);
    color: var(--text-color);
    font-weight: 400;
    text-align: center;
    line-height: 1.5625rem;
    margin-inline: 1.5rem;

    @media only screen and (min-width : 768px) {
        margin-bottom: 6.0625rem;
        max-width: 28.625rem;
        line-height: 1.75rem;
        font-size: var(--font-2);
    }
`;




