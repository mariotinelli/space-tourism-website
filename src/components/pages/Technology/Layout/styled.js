import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 44.375rem;
    padding-top: calc(1.5rem * 2);
    background: url(${props => props.background}) no-repeat;
    background-size: 100vw 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
    height: 170px;
    width: 101vw;
`;

export const DefaultText = styled.p`
    margin-top: 6.25rem;
    font-family: "Barlow Condensed", sans-serif;
    font-size: var(--font-3);
    font-weight: 400;
    color: var(--text-color);
    letter-spacing: 2.3625px;
    text-transform: uppercase;
`;

export const Name = styled.p`
    margin-top: 0.5625rem;
    margin-bottom: 1rem;
    font-family: "Bellefair", sans-serif;
    font-size: var(--font-7);
    font-weight: 400;
    color: var(--white-color);
    text-transform: uppercase;
`;





