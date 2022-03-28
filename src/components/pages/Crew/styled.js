import styled from 'styled-components'
import { Swiper as SwiperReact} from "swiper/react";


export const Swiper = styled(SwiperReact)`
    width: 100%;
    height: 100%;

    & .swiper-pagination {
        top: 53%;
        height: 0.625rem;
    }

    & .swiper-pagination-bullet-active {
        width: 0.625rem;
        height: 0.625rem;
        background: var(--white-color);
    }
    & .swiper-pagination-bullet {
        width: 0.625rem;
        height: 0.625rem;
        background: var(--white-color);
    }

    & .swiper-wrapper {
        text-align: center;
    }

`;
