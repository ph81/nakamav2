import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';
import TestingData from '../pages/TestingData';

const Routes= () => {

  return(
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/home" component={Home}/> 
            <Route exact path="/allproducts" component={AllProducts}/> 
            <Route exact path="/test" component={TestingData}/> 
          </Switch>
        </BrowserRouter>

      </>

  );

}


export default Routes;