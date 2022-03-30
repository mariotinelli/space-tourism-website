import styled from 'styled-components'

export const ExploreComponent = styled.div`
    width: 18.75rem;
    height: 18.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: auto;

    @media only screen and (min-width : 768px) {
        margin-top: 4.5rem;
        width: 410px;
        height: 410px;
    }
`;

export const Button = styled.button`
    width: 9.375rem;
    height: 9.375rem;
    background-color: var(--white-color);
    border: none;
    border-radius: 50%;
    transition: 0.5s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-sizing: content-box;
        border-radius: 50%;
       -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 3.125rem solid rgba(255, 255, 255, .1);
    }
    
    @media only screen and (min-width : 768px) {
        width: 15.125rem;
        height: 15.125rem;

        &:hover {
            border: 5.25rem solid rgba(255, 255, 255, .1);
        }
        
    }
`;

export const Text = styled.p`
    color: var(--dark-color);
    font-size: var(--font-1);
    font-family: 'Bellefair', sans-serif;
    font-weight: 400;

    @media only screen and (min-width : 768px) {
        font-size: var(--font-8);
        letter-spacing: 0.125rem;
    }    
`;