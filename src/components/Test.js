import React, {useState, useEffect} from 'react';
import useFetchData from '../utils/hooks/useFetchData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import  styles from '../styles/FeaturedContent.module.css'
// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
import { WZL_API } from '../utils/constants';
  
// install Swiper modules
SwiperCore.use([Navigation]);


const Test = () => {

  const [shouldCall, setShouldCall] = useState(false);
 
  const { data } = useFetchData(WZL_API.bannerURL, shouldCall);
 

  
  useEffect(() => {    
    setShouldCall(true); 
}, []);

 

        
    return (
      <>
        <Swiper spaceBetween={50} slidesPerView={1} loop={true} centeredSlides>

        {data &&
          data.results.map((item, idx) => {
            return (
            <SwiperSlide key={item.id} className={styles["swiper-slide"]}>
            <img src={item.data.main_image.url} alt={item.data.title} /> 
            </SwiperSlide> 
            )
          })}
    
        </Swiper>
      </>
    )
    
}

export default Test;