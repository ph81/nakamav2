import React from 'react';
import ReactDOM from 'react-dom';
//import { useRoutes } from 'hookrouter';
import Routes from './utils/routes';
import { GlobalProvider } from './context/GlobalContext';
import { ProductsProvider } from './context/ProductContext';

const App = () => {
  return (
    <GlobalProvider>
      <ProductsProvider>
        <Routes />
      </ProductsProvider>
    </GlobalProvider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;