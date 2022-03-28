import React from 'react'

import background from "/public/assets/crew/background-crew-mobile.jpg";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Container } from '../Destinations/Layout/styled';
import { Swiper } from './styled';

import Douglas from './Douglas';
import Anousheh from './Anousheh';
import Mark from './Mark';
import Victor from './Victor';

const Crew = () => (
  <>
    <Container height="44.375rem" background={background}>
      <Swiper
        pagination={true} 
        modules={[Pagination]} 
        className="mySwiper"
      >
        <SwiperSlide> <Douglas /> </SwiperSlide>
        <SwiperSlide> <Mark /> </SwiperSlide>
        <SwiperSlide> <Victor /> </SwiperSlide>
        <SwiperSlide> <Anousheh /> </SwiperSlide>
        
      </Swiper>
    </Container>
  </>
);

export default Crew;