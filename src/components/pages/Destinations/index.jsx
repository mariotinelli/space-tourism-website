import React from 'react'

import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { Swiper } from './styled';
import Moon from './Moon';
import Mars from './Mars';
import Europa from './Europa';
import Titan from './Titan';

const links = [
    "MOON",
    "MARS",
    "EUROPA",
    "TITAN",
]

const Destinations = () => (
  <>
    
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: function (index, className ) {
            return '<span class="' + className + '">' + links[index] + "</span>";
          },
        }} 
        modules={[Pagination]} 
        className="mySwiper"
      >
        <SwiperSlide> <Moon /> </SwiperSlide>
        <SwiperSlide> <Mars /> </SwiperSlide>
        <SwiperSlide> <Europa /> </SwiperSlide>
        <SwiperSlide> <Titan /> </SwiperSlide>
        
      </Swiper>
  </>
);

export default Destinations;