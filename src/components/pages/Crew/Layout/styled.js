import styled from 'styled-components'

export const ImageContainer = styled.div`
    width: 100%;    
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
`;

export const Image = styled.img`
    height: 13.9375rem;
    width: auto;
`;

export const Occupation = styled.p`
    margin-top: 4.625rem;
    font-family: "Bellefair", sans-serif;
    font-size: var(--font-2);
    font-weight: 400;
    color: var(--title-destinations);
    text-transform: uppercase;
`;

export const Name = styled(Occupation)`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: var(--font-7);
    color: var(--white-color);
`;




