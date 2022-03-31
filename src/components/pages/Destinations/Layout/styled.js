import styled from 'styled-components'
import {
    keyframes
} from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    padding-top: 4rem;
    padding-inline: 1.5rem;
    background: url(${props => props.background}) no-repeat;
    background-size: 100vw 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width : 768px) {
        padding-top: 6rem;
        background: url("/public/assets/destination/background-destination-tablet.jpg") no-repeat;
        background-size: 100vw 100%;
        height: 100%;
        padding-inline: 2.4375rem;
    }

    @media only screen and (min-width : 1025px) {
        padding-top: 8.5rem;
        background: url("/public/assets/destination/background-destination-desktop.jpg") no-repeat;
        background-size: 100vw 100%;
        height: 100vh;
    }

    @media only screen and (min-width : 1440px) {
        padding-inline: 0;
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const TitleImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 4.625rem;

    @media only screen and (min-width : 768px) {
        margin-top: 2.5rem;
        margin-bottom: 7.4375rem;
        gap: 3.75rem;
    }

    @media only screen and (min-width : 90rem) {
        width: 42.1875rem;
        margin-top: 4.75rem;
        margin-right: 9.8125rem;
        margin-bottom: 7rem;
        gap: 6.0625rem;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.125rem;    

    @media only screen and (min-width : 768px) {
        align-self: flex-start;
    }

    @media only screen and (min-width : 90rem) {
        margin-left: 10.4063rem;
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


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Image = styled.img`
    width: 10.625rem;
    height: 10.625rem;
    animation: ${rotate} 180s linear infinite;   
    
    @media only screen and (min-width : 768px) {
        width: 18.75rem;
        height: 18.75rem;
    }

    @media only screen and (min-width : 1440px) {
        width: 27.8125rem;
        height: 27.8125rem;
        margin-left: 14.375rem;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.625rem;

    @media only screen and (min-width : 768px) {
        margin-bottom: 3.875rem;
    }

    @media only screen and (min-width : 1440px) {
        margin-top: 15.3125rem;
        align-items: flex-start;
    }
`;

export const Name = styled.p`
    font-family: 'Bellefair', sans-serif;
    font-size: var(--font-4);
    font-weight: 400;
    color: var(--white-color);
    line-height: 4rem;

    @media only screen and (min-width : 768px) {
        font-size: var(--font-9);
        line-height: 5.75rem;
    }

    @media only screen and (min-width : 1440px) {
        margin-bottom: 0.875rem;
        font-size: var(--font-13);
        line-height: 115px;
    }

`;

export const Description = styled.p`
    font-family: 'Barlow', sans-serif;
    font-size: var(--font-5);
    color: var(--text-color);
    font-weight: 400;
    text-align: center;
    line-height: 1.5625rem;

    @media only screen and (min-width : 768px) {
        max-width: 35.8125rem;
        line-height: 1.75rem;
        font-size: var(--font-2);
    }

    @media only screen and (min-width : 1440px) {
        max-width: 27.75rem;
        text-align: start;
        font-size: var(--font-12);
        line-height: 2rem;
    }
`;

export const Information = styled.div`
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media only screen and (min-width : 768px) {
        flex-direction: row;
        justify-content: center;
        margin-top: 3.0625rem;
        padding-top: 1.8125rem;
        width: 35.8125rem;
        gap: 0.6875rem;
    }

    @media only screen and (min-width : 1440px) {
        margin-top: 3.375rem;
        width: 27.75rem;
    }
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 13.9375rem;
    margin-bottom: 2rem;

    @media only screen and (min-width : 768px) {
        margin-bottom: 0;
    }

    @media only screen and (min-width : 1440px) {
        align-items: flex-start;
    }
`;

export const Text = styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: var(--font-3);
    font-weight: 400;
    color: var(--text-color);
    letter-spacing: 0.1477rem;
    margin-bottom: 0.75rem;
`;

export const Number = styled.p`
    font-family: 'Bellefair', sans-serif;
    font-weight: 400;
    font-size: var(--font-6);
    color: var(--white-color);
`;