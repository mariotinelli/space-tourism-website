import styled from 'styled-components'

export const SectionComponent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: calc(3rem * 2);
    max-width: 28.125rem;
    margin-inline: auto;

    @media only screen and (min-width : 768px) {
        margin-top: 11.125rem;
        gap: 1.5rem;
    }
`;

export const Title = styled.p`
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: var(--font-2);
    line-height: 1.1875rem;
    text-align: center;
    letter-spacing: 0.1688rem;
    color: var(--text-color);

    @media only screen and (min-width : 768px) {
        font-size: var(--font-1);
        letter-spacing: 0.2109rem;
    }
`;

export const Name = styled.p`
    font-family: 'Bellefair';
    font-size: var(--font-9);
    line-height: 6.25rem;
    text-align: center;
    color: var(--white-color);

    @media only screen and (min-width : 768px) {
        font-size: var(--font-10);
        line-height: 9.375rem;
    }    
`;

export const Text = styled.p`
    font-family: 'Barlow';
    font-size: var(--font-5);
    line-height: 1.5625rem;
    text-align: center;
    color: var(--text-color);  
    
    @media only screen and (min-width : 768px) {
        max-width: 27.75rem;
        font-size: var(--font-2);
    }
`;