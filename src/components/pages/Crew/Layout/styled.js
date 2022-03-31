import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    padding-top: 4rem;
    padding-inline: 1.5rem;
    background: url("/public/assets/crew/background-crew-mobile.jpg") no-repeat;
    background-size: 100vw 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width : 768px) {
        padding-top: 6rem;
        background: url("/public/assets/crew/background-crew-tablet.jpg") no-repeat;
        background-size: 100vw 100%;
        height: 100%;
        padding-inline: 2.4375rem;
    }

    @media only screen and (min-width : 1440px) {
        padding-top: 8.5rem;
        background: url("/public/assets/crew/background-crew-desktop.jpg") no-repeat;
        background-size: 100vw 100vh;
        height: 100%;
        padding-left: 10.4063rem;
        padding-right: 8.5625rem;
        padding-bottom: auto;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.125rem;
    margin-top: 24px;
    margin-bottom: 2rem;

    @media only screen and (min-width : 768px) {
        margin-top: 2.5rem;
        margin-bottom: 3.75rem;
        align-self: flex-start;
    }

    @media only screen and (min-width : 1440px) {
        margin-top: 4.75rem;
        margin-bottom: 0;
        position: absolute;
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

export const ImageContainer = styled.div`
    width: 100%;    
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid var(--border-color);

    @media only screen and (min-width : 768px) {
        position: relative;
        border-bottom: none;
        order: 1;
    }

    @media only screen and (min-width : 1440px) {
        width: auto;
        margin: 0;
        margin-left: 5.0938rem;
    }
`;

export const Image = styled.img`
    height: 13.9375rem;
    width: auto;

    @media only screen and (min-width : 768px) {
        height: 33.25rem;
    }

    @media only screen and (min-width : 1440px) {
        margin-top: 3.875rem;
        height: 43.875rem;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width : 1440px) {
        margin-top: 16.5rem;
        align-items: flex-start;
    }
`;

export const Occupation = styled.p`
    margin-top: 4.625rem;
    font-family: "Bellefair", sans-serif;
    font-size: var(--font-2);
    font-weight: 400;
    color: var(--title-destinations);
    text-transform: uppercase;

    @media only screen and (min-width : 768px) {
        margin-top: 0;
        font-size: var(--font-7);
        margin-bottom: 0.5rem;
    }

    @media only screen and (min-width : 1440px) {
        margin-top: 0;
        font-size: var(--font-8);
        line-height: 2.3125rem;
        margin-bottom: 0.9375rem;
    }
`;

export const Name = styled(Occupation)`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: var(--font-7);
    color: var(--white-color);

    @media only screen and (min-width : 768px) {
        font-size: var(--font-11);
        margin-top: 0;
        margin-bottom: 1rem;
    }

    @media only screen and (min-width : 1440px) {
        font-size: var(--font-4);
        line-height: 64px;
        margin-bottom: 1.6875rem;
    }
`;

export const Description = styled.p`
    font-family: 'Barlow', sans-serif;
    font-size: var(--font-5);
    color: var(--text-color);
    font-weight: 400;
    text-align: center;
    line-height: 1.5625rem;
    margin-bottom: 6.5rem;

    @media only screen and (min-width : 768px) {
        margin-bottom: 5.625rem;
        max-width: ${props => props.maxWidth};
        line-height: 28px;
        font-size: var(--font-2);
    }

    @media only screen and (min-width : 1440px) {
        max-width: 27.75rem;
        line-height: 32px;
        font-size: var(--font-12);
        text-align: start;
        margin-bottom: 0;
    }
`;


