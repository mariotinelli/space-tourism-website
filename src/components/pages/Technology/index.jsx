import React from 'react'

import background from "/public/assets/technology/background-technology-mobile.jpg";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { Swiper } from './styled';

import { Container } from './Layout/styled';

import Launch from './Launch';
import Spaceport from './Spaceport';
import SpaceCapsule from './SpaceCapsule';

const Technology = () => (
  <>
    <Container background={background}>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }} 
        modules={[Pagination]} 
        className="mySwiper"
      >
        <SwiperSlide> <Launch /> </SwiperSlide>
        <SwiperSlide> <Spaceport /> </SwiperSlide>
        <SwiperSlide> <SpaceCapsule /> </SwiperSlide>
        
      </Swiper>
    </Container>
  </>
);

export default Technology;