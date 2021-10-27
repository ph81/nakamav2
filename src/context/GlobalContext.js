import React, { useState, createContext } from 'react';

export const AppContext = createContext();


export const GlobalProvider = ({children}) => {
  const [products, setProducts] = useState({});
  const [categories, setCategories] = useState({});
  const [filter, setFilter] = useState('');
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const globalData = {
    products, setProducts,
    categories, setCategories,
    filter, setFilter,
    user, setUser,
    searchTerm, setSearchTerm
  }

  return (
    <AppContext.Provider value={globalData}>
      {children}
    </AppContext.Provider>
  )
}
