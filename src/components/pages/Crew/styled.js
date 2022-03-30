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
    }

    & .swiper-pagination-bullet-active {
        width: 0.625rem;
        height: 0.625rem;
        background: var(--white-color);
    }
    & .swiper-pagination-bullet {
        width: 0.625rem;
        height: 0.625rem;
    }

    & .swiper-pagination-bullet:hover {
        width: 0.625rem;
        height: 0.625rem;
        background: var(--white-color);
    }

    & .swiper-wrapper {
        text-align: center;
    }

`;
