import React, {useState, useEffect} from 'react';
import useFetchData from '../utils/hooks/useFetchData';
import { WZL_API } from '../utils/constants';
import  styles from '../styles/ProductCategories.module.css'

const ProductCategories = () => {

    //const gridCategories = dataCategories.results;
    //fetching data
    const [shouldCall, setShouldCall] = useState(false);
    const { data } = useFetchData(WZL_API.categoriesURL, shouldCall);

    useEffect(() => {    
        setShouldCall(true); 
    }, []);

    return (
        <section>
            <h2>Our departments</h2>
               <div className={styles["grid__container"]}>
               {data &&
                data.results.map((category, idx) => {
                    return (
                    <div className={styles["grid__item"]} key={category.id}>
                            <img src={category.data.main_image.url} alt={category.data.name} />
                            <p>{category.data.name}</p>
                        </div>    
                    )
                })}
        </div>
        </section>
        
    )
}

export default ProductCategories;