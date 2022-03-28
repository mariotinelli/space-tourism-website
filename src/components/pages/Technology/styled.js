import styled from 'styled-components'
import { Swiper as SwiperReact} from "swiper/react";


export const Swiper = styled(SwiperReact)`
    width: 100%;
    height: 100%;

    & .swiper-pagination {
        top: 46%;
        height: 2.5rem;
    }
        
    & .swiper-pagination-bullet {
        font-family: 'Bellefair';
        width: 2.5rem;
        height: 2.5rem;
        background: transparent;
        color: var(--white-color);
        font-weight: 400;
        font-size: var(--font-2);
        padding-top: 0.6875rem;
        border: 1px solid var(--title-destinations);
        opacity: 1;
    }

    & .swiper-pagination-bullet-active {
        background: var(--white-color);
        color: var(--dark-color);
    }

    & .swiper-pagination-bullet:hover {
        border: 1px solid var(--white-color);
    }

    & .swiper-wrapper {
        text-align: center;
    }

`;
