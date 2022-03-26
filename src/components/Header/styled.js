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
`;

export const Logo = styled.img.attrs({src: logo})``;

export const MenuToggle = styled.button`
    border: none;
    background-color: transparent;
    right: 1.5rem;
`;

export const Icon = styled.img.attrs({src: menu})``;


export const MenuComponent = styled.div`
    width: 15.875rem;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background: var(--background-menu);
    backdrop-filter: blur(1.5rem);
`;

export const Close = styled.button`
    margin-top: 2.1219rem;
    margin-left: 13.0281rem;
    border: none;
    background-color: transparent;
`;

export const CloseIcon = styled.img.attrs({src: closeIcon})``;

export const Links = styled.div`
    margin-top: 4.0594rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Number = styled.p`
    font-weight: 700;
    margin-right: 0.875rem;
`;

export const Link = styled(LinkRouter)`
    display: flex;
    font-family: "Barlow Condensed", sans-serif;
    font-size: var(--font-2);
    font-weight: 400;
    color: var(--white-color);
    text-decoration: none;
    letter-spacing: 2.7px;
`;
