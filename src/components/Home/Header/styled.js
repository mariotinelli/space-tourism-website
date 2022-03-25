import styled from 'styled-components'
import logo from '../../../assets//shared/logo.svg'
import menu from '../../../assets//shared/icon-hamburger.svg'

export const HeaderComponent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img.attrs({src: logo})``;

export const MenuToggle = styled.button`
    border: none;
    background-color: transparent;
    right: 1.5rem;
`;

export const Icon = styled.img.attrs({src: menu})``;