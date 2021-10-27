import React from 'react';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';



const Test = () => {

    

  const {data, isLoading} = useFeaturedBanners();

  console.log(data, isLoading);
    


    return (
     
           <>
           </>
    )
    
}

export default Test;