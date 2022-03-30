import styled from 'styled-components'
import { Swiper as SwiperReact} from "swiper/react";


export const Swiper = styled(SwiperReact)`
    width: 100%;
    height: 100%;

    & .swiper-pagination {
        top: 20.9375rem;
        height: 1.75rem;
        display: flex;
        justify-content: center;
        gap: 1.625rem;
        

        @media only screen and (min-width : 768px) {
            top: 35.8125rem;
            height: 2.125rem;
            gap: 2.1875rem;
        }
    }
       
    & .swiper-pagination-bullet {
        font-family: 'Barlow Condensed';
        width: auto;
        height: 1.75rem;        
        background: transparent;
        color: var(--text-color);
        font-weight: 400;
        letter-spacing: 0.1477rem;;
        font-size: var(--font-3);
        opacity: 1;
        border-radius: 0;
        text-align: start;

        @media only screen and (min-width : 768px) {
            height: 2.125rem;
            width: auto;
            font-size: var(--font-2);
            letter-spacing: 0.1688rem;
        }
    }

    & .swiper-pagination-bullet-active {
        border-bottom: 3px solid var(--white-color);
        color: var(--white-color);
    }

    & .swiper-pagination-bullet:hover {
        border-bottom: 3px solid var(--title-destinations);
    }

    & .swiper-wrapper {
        text-align: center;
    }

`;
