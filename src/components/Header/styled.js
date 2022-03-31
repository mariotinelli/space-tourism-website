import styled from 'styled-components'
import logo from '../../../public/assets/shared/logo.svg'
import menu from '../../../public/assets/shared/icon-hamburger.svg'
import { Link as LinkRouter} from 'react-router-dom'
import closeIcon from '../../../public/assets/shared/icon-close.svg'

export const HeaderComponent = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    padding: 1.5rem; 

    @media only screen and (min-width : 768px) {
        padding-left: 2.4375rem; 
    }

    @media only screen and (min-width : 1025px) {
        padding: 0;
        margin-top: 2.5rem;
        height: 6rem;
        box-sizing: content-box;
    }
`;

export const Logo = styled.img.attrs({src: logo})`

    width: 2.5rem;
    height: 2.5rem;
    z-index: 100;

    @media only screen and (min-width : 768px) {
        width: 3rem;
        height: 3rem;
    }

    @media only screen and (min-width : 1025px) {
        margin-left: 3.4375rem;
    }

`;

export const MenuToggle = styled.button`
    border: none;
    background-color: transparent;
    right: 1.5rem;
    z-index: 100;

    @media only screen and (min-width : 768px) {
        display: none;
    }
`;

export const Icon = styled.img.attrs({src: menu})``;


export const MenuComponent = styled.div`
    display: ${props => props.display === false ? "none" : "block"};
    width: 15.875rem;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background: var(--background-menu);
    backdrop-filter: blur(1.5rem);
    z-index: 100;

    @media only screen and (min-width : 768px) {
        width: 28.125rem;
        height: 6rem;
        display: flex;
        backdrop-filter: blur(1.5rem);
    }

    @media only screen and (min-width : 1025px) {
        width: 51.875rem;
        display: flex;
        backdrop-filter: blur(1.5rem);
    }
`;

export const Close = styled.button`
    margin-top: 2.1219rem;
    margin-left: 13.0281rem;
    border: none;
    background-color: transparent;

    @media only screen and (min-width : 768px) {
        display: none;
    }
`;

export const CloseIcon = styled.img.attrs({src: closeIcon})``;

export const Links = styled.div`
    margin-top: 4.0594rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & .navlink {
        display: flex;
        font-family: "Barlow Condensed", sans-serif;
        font-size: var(--font-2);
        font-weight: 400;
        color: var(--white-color);
        text-decoration: none;
        letter-spacing: 0.1688rem;
    }

    @media only screen and (min-width : 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 2.4375rem;
        margin-inline: auto;
        gap: 2.3125rem;        

        & .navlink {
            font-size: var(--font-3);
            letter-spacing: 0.1477rem;
            padding-bottom: 2.25rem;
        }

        & .navlink:hover {
            border-bottom: 3px solid #FFF5;
        }

        & .navlink.active {
            border-bottom: 3px solid var(--white-color);
        }
    }

    @media only screen and (min-width : 1025px) {
        gap: 3rem;        

        & .navlink {
            font-size: var(--font-2);
            letter-spacing: 0.1688rem;
            padding-bottom: 2.375rem;
        }
    }
`;

export const Number = styled.p`
    font-weight: 700;
    margin-right: 0.875rem;

    @media only screen and (min-width : 768px) {
        display: none;
    }
`;

export const Link = styled(LinkRouter)`
    display: flex;
    font-family: "Barlow Condensed", sans-serif;
    font-size: var(--font-2);
    font-weight: 400;
    color: var(--white-color);
    text-decoration: none;
    letter-spacing: 0.1688rem;

    @media only screen and (min-width : 768px) {
        font-size: var(--font-3);
        letter-spacing: 0.1477rem;
        padding-bottom: 39px;
    }
`;
