import styled from 'styled-components'
import { Swiper as SwiperReact} from "swiper/react";


export const Swiper = styled(SwiperReact)`
    width: 100%;
    height: 100%;

    & .swiper-pagination {
        top: 21.4375rem;
        height: 2.5rem;

        @media only screen and (min-width : 768px) {
            top: 36.625rem;
            height: 60px;
        }

        @media only screen and (min-width : 1440px) {
           display: flex;
           flex-direction: column;
           top: 23.9375rem;
           left: 10.3125rem;
           height: auto;
           width: auto;
           gap: 2rem;
        }
    }
        
    & .swiper-pagination-bullet {
        font-family: 'Bellefair';
        height: 2.5rem;
        width: 2.5rem;
        background: transparent;
        color: var(--white-color);
        font-weight: 400;
        font-size: var(--font-2);
        padding-top: 0.6875rem;
        border: 1px solid var(--title-destinations);
        opacity: 1;

        @media only screen and (min-width : 768px) {
            height: 3.75rem;
            width: 3.75rem;
            font-size: var(--font-7);
            padding-top: 1rem;
        }

        @media only screen and (min-width : 1440px) {
            height: 5rem;
            width: 5rem;
            font-size: var(--font-8);
            margin: 0;
            padding-top: 1.375rem;
        }

    }

    & .swiper-pagination-bullet-active {
        background: var(--white-color);
        color: var(--dark-color);
    }

    & .swiper-pagination-bullet:hover {
        border: 1px solid var(--white-color);
    }

`;
