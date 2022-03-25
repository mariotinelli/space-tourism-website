import styled from 'styled-components'

export const SectionComponent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: calc(3rem * 2);
`;

export const Text = styled.p`
    color: var(--text-color);
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    line-height: ${props => props.lineHeight};
    font-weight: 400;
    text-align: center;
`;