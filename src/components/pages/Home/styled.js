import styled from 'styled-components'

export const HomeComponent = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 1.5rem 1.5rem 3rem 1.5rem;
    background: url(${props => props.background}) no-repeat;
    background-size: 100vw 100%;
`;