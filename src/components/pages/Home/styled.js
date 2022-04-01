import styled from 'styled-components'

export const HomeComponent = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 4rem;
    padding-inline: 1.5rem;
    background: url(${props => props.background}) no-repeat;
    background-size: 100vw 100%;

    @media only screen and (min-width : 768px) {
        background: url("/public/assets/home/background-home-tablet.jpg") no-repeat;
        background-size: 100vw 100%;
        padding: 0;
        padding-top: 1.5rem;
        padding-left: 1.5rem;
    }

    @media only screen and (min-width : 1025px) {
        padding-top: 2.5rem; 
        background: url("/public/assets/home/background-home-desktop.jpg") no-repeat;
        background-size: 100vw 100%;
    }

    @media only screen and (min-width : 1440px) {
        display: flex;
        height: 100vh;
    }
`;