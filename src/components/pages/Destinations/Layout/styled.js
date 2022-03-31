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
    margin-bottom: 4.625rem;
    animation: ${rotate} 180s linear infinite;   
    
    @media only screen and (min-width : 768px) {
        width: 18.75rem;
        height: 18.75rem;
        margin-bottom: 7.4375rem;
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
`;

export const Description = styled.p`
    font-family: 'Barlow', sans-serif;
    font-size: var(--font-5);
    color: var(--text-color);
    font-weight: 400;
    text-align: center;
    line-height: 1.5625rem;
    margin-bottom: ${props => props.marginBottom};
    padding-inline: ${props => props.paddingInline};

    @media only screen and (min-width : 768px) {
        max-width: 35.8125rem;
        line-height: 28px;
        font-size: var(--font-2);
    }
`;

export const Information = styled.div`
    margin-top: 32px;
    padding-top: 2rem;
    padding-bottom: 1.625rem;
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
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 13.9375rem;
    margin-bottom: 2rem;

    @media only screen and (min-width : 768px) {
        margin-bottom: 62px;
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