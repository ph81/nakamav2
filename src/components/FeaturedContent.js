import React, {useState, useEffect} from 'react';
import useFetchData from '../utils/hooks/useFetchData';
import { WZL_API } from '../utils/constants';
// Import Swiper React components
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

const FeaturedContent = () => {

    //const featuredBanners = dataSlider.results;
    //fetching data
    const [shouldCall, setShouldCall] = useState(false);
    const { data } = useFetchData(WZL_API.bannerURL, shouldCall);

    useEffect(() => {    
        setShouldCall(true); 
    }, []);

    return (
        <>
        <Swiper spaceBetween={50} slidesPerView={1} loop={true} centeredSlides>
        {data &&
          data.results.map((banner, idx) => {
            return (
              <SwiperSlide key={banner.id} className={styles["swiper-slide"]}>
              <img src={banner.data.main_image.url} alt={banner.data.title} /> 
              </SwiperSlide> 
            )
          })}
        </Swiper>
      </>
    )
    
}

export default FeaturedContent;