
import React from 'react';
import './App.css';

import AllContent from './modules/AllContent';
import Home from './components/Home';
import Product from './components/Product';
import { Routes, Route } from "react-router-dom"




function App() {
  return (
   <div >
       <AllContent></AllContent>
       <Product></Product>
       <Routes>
       <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
      </Routes>
    
 
   </div>
   
  );
}

export default App;
