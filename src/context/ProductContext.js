import React, { useState, createContext } from 'react';

export const ProductContext = createContext();


export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}
