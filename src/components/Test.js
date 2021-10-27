import React, { useState, useEffect } from 'react';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import  styles from '../styles/FeaturedContent.module.css'
// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
  
// install Swiper modules
SwiperCore.use([Navigation]);


const Test = () => {

    

  const {data, isLoading} = useFeaturedBanners();

  console.log(data, isLoading);
    


    return (
     
           <>
           </>
    )
    
}

export default Test;