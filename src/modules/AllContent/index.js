import React from 'react';

import Header from '../../components/Header';
import Home from '../../components/Home';

import {useDispatch,useSelector} from 'react-redux';
import { fetchproduct } from '../../Redux/Slice/productdata';
import Product from '../../components/Product';


export default function AllContent() {
  const dispatch=useDispatch();
 
  return (
    <div>
      <Header></Header>
      <h1 className='text-3xl font-bold text-center mt-20'>All Products  </h1>
      <Home></Home>
     
     
      
    </div>
  )
}
