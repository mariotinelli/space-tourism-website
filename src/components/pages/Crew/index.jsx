import React from 'react'

import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Swiper } from './styled';

import Douglas from './Douglas';
import Anousheh from './Anousheh';
import Mark from './Mark';
import Victor from './Victor';

const Crew = () => (
  <>
    
    <Swiper
      spaceBetween={30}
      pagination={{clickable: true,}} 
      modules={[Pagination]} 
      className="mySwiper"
    >
      <SwiperSlide> <Douglas /> </SwiperSlide>
      <SwiperSlide> <Mark /> </SwiperSlide>
      <SwiperSlide> <Victor /> </SwiperSlide>
      <SwiperSlide> <Anousheh /> </SwiperSlide>
      
    </Swiper>

  </>
);

export default Crew;