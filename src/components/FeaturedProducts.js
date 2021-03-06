import React, {useState, useEffect} from 'react';
import useFetchData from '../utils/hooks/useFetchData';
import { WZL_API } from '../utils/constants';
import styles from '../styles/FeaturedProducts.module.css'


const FeaturedProducts = () => {

    //const featuredList = dataProducts.results;
     //fetching data
     const [shouldCall, setShouldCall] = useState(false);
     const { data } = useFetchData(WZL_API.productsURL, shouldCall);
 
     useEffect(() => {    
         setShouldCall(true); 
     }, []);

    return (
        <section id="collection">
            <h2>New collection</h2>
               <div className={styles["product__container"]}>
                {data &&
                    data.results.map((item, idx) => {
                        return (
                        <div className={styles["product__item"]} key={item.id}>    
                            <div className={styles["product__image"]}>
                                <img src={item.data.mainimage.url} alt={item.data.name}  />
                            </div>
                            <div className={styles["product__title"]}>{item.data.name}</div>
                            <div className={styles["product__price"]}>$ {item.data.price}</div>
                                    
                        </div>
                        )
                    })}
                </div>
        <div className={styles["view__products"]}><a href="/allproducts"><span>View all our products</span></a></div>
        </section>
        
    )
}

export default FeaturedProducts;