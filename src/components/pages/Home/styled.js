import styled from 'styled-components'

export const HomeComponent = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 1.5rem;
    background: url(${props => props.background}) no-repeat;
    background-size: 100vw 100%;

    @media only screen and (min-width : 768px) {
        background: url("/public/assets/home/background-home-tablet.jpg") no-repeat;
        background-size: 100vw 100%;
        padding-top: 1.5rem;
        overflow: hidden;
    }
`;