import styled from 'styled-components'

export const ExploreComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5.0625rem;
`;

export const Button = styled.button`
    width: 9.375rem;
    height: 9.375rem;
    background-color: var(--white-color);
    border: none;
    border-radius: 50%;
    transition: 0.5s;
    position: relative;

    &:hover {
        box-sizing: content-box;
        border-radius: 50%;
       -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 5.25rem solid rgba(255, 255, 255, .1);
    }
`;


export const Text = styled.p`
    color: var(--dark-color);
    font-size: var(--font-1);
    font-family: 'Bellefair', sans-serif;
    font-weight: 400;
`;