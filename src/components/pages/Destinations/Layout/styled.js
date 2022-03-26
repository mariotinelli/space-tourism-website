import styled from 'styled-components'
import { NavLink as LinkRouter} from 'react-router-dom'

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    padding-top: calc(1.5rem * 2);
    padding-inline: 1.5rem;
    background: url(${props => props.background}) no-repeat;
    background-size: 100vw 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.125rem;
    margin-top: calc(1.5rem * 2);
    margin-bottom: 2rem;
`;

export const Index = styled.p`
    color: var(--title-destinations);
    font-family: 'Barlow Condensed', sans-serif;
    font-size: var(--font-2);
    font-weight: 700;
    letter-spacing: 2.7px;
`;

export const Title = styled(Index)`
    color: var(--white-color);
    font-weight: 400;
`;

export const Image = styled.img`
    width: 10.625rem;
    height: 10.625rem;
    margin-bottom: 1.625rem;
`;

export const Links = styled.div`
    //height: 1.75rem;
    display: flex;
    gap: 1.625rem;
`;

export const Link = styled(LinkRouter)`
    font-family: "Barlow Condensed", sans-serif;
    font-size: var(--font-3);
    font-weight: 400;
    color: var(--text-color);
    letter-spacing: 0.1477rem;
    text-transform: uppercase;
    text-decoration: none;
    padding-bottom: 8px;

    &:hover {
        color: var(--white-color);
        border-bottom: 3px solid var(--white-color);
    }
`;

export const Name = styled.p`
    margin-top: 1.25rem;
    font-family: 'Bellefair', sans-serif;
    font-size: var(--font-4);
    font-weight: 400;
    color: var(--white-color);
    line-height: 64px;
`;

export const Description = styled.p`
    font-family: 'Barlow', sans-serif;
    font-size: var(--font-5);
    color: var(--text-color);
    font-weight: 400;
    text-align: center;
    line-height: 1.5625rem;
`;

export const Information = styled.div`
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 3.625rem;
    border-top: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 2rem;
`;