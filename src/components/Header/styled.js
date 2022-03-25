import styled from 'styled-components'
import logo from '../../assets/shared/logo.svg'
import menu from '../../assets/shared/icon-hamburger.svg'

export const HeaderComponent = styled.header`
    width: 23.4375rem;
    max-width: 23.4375rem;
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