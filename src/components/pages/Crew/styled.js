import styled from 'styled-components'
import { Swiper as SwiperReact} from "swiper/react";


export const Swiper = styled(SwiperReact)`
    width: 100%;
    height: 100%;

    & .swiper-pagination {
        top: 24.625rem;
        height: 0.625rem;

        @media only screen and (min-width : 768px) {
            top: 27.625rem;
        }

        @media only screen and (min-width : 1440px) {
            width: 8.25rem;
            top: 49.4375rem;
            left: 10.4375rem;
        }
    }

    & .swiper-pagination-bullet-active {
        background: var(--white-color);
    }

    & .swiper-pagination-bullet {
        width: 0.625rem;
        height: 0.625rem;

        @media only screen and (min-width : 1440px) {
            width: 0.9375rem;
            height: 0.9375rem;
            background: var(--white-color);
        }
    }

    & .swiper-pagination-bullet:hover {
        background: var(--white-color);
    }

`;
