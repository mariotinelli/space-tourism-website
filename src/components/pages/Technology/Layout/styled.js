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
        //padding-inline: 2.4375rem;
    }

    @media only screen and (min-width : 90rem) {
        padding-top: 8.5rem;
        background: url("/public/assets/technology/background-technology-desktop.jpg") no-repeat;
        background-size: 100vw 100%;
        height: 100%;
        padding-inline: 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
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
        margin-left: 2.4063rem;
        align-self: flex-start;
    }

    @media only screen and (min-width : 1440px) {
        position: absolute;
        margin-left: 10.4063rem;
        margin-top: 4.75rem;
        margin-bottom: 0;
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

    @media only screen and (min-width : 1440px) {
        font-size: var(--font-6);
        line-height: 2.125rem;
        letter-spacing: 0.2953rem;
    }
`;

export const Title = styled(Index)`
    color: var(--white-color);
    font-weight: 400;
`;

export const Image = styled.div`
    height: 10.625rem;
    width: 102vw;
    margin-inline: auto;
    background: url(${props => props.imageMobile}) no-repeat;
    background-size: 100% 10.625rem;

    @media only screen and (min-width : 768px) {
        height: 19.375rem;
        background-size: 100% 19.375rem;
    }

    @media only screen and (min-width : 1440px) {
        margin: 0;
        order: 2;
        width: 32.1875rem;
        height: 32.9375rem;
        margin-top: 8.5rem;
        margin-bottom: 6.3125rem;
        background: url(${props => props.imageDesktop}) no-repeat;
        background-size: 100% 100%;
    }
    
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width : 1440px) {
        align-items: flex-start;
        margin-left: 20.3125rem;
        margin-top: 15.4375rem;
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

    @media only screen and (min-width : 1440px) {
        margin-top: 0;
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

    @media only screen and (min-width : 1440px) {
        font-size: var(--font-4);
        line-height: 4rem;
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

    @media only screen and (min-width : 1440px) {
       text-align: start;
       margin-inline: 0;
       margin-bottom: 0;
       font-size: var(--font-12);
       line-height: 2rem;
       max-width: 27.75rem;
    }
`;




