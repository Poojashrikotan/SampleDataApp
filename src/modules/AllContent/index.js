import React from 'react';

import Header from '../../components/Header';
import Home from '../../components/Home';

import {useDispatch,useSelector} from 'react-redux';
import { fetchproduct } from '../../Redux/Slice/productdata';


export default function AllContent() {
  const dispatch=useDispatch();
 
  return (
    <div>
      <Header></Header>
{/*       
      <button className="justifycontent-center inline-flex items-center bg-purple-500  text-white border-0 py-2 px-3 focus:outline-none hover:bg-purple-700 rounded text-base mt-4 md:mt-0" onClick={e=>dispatch(fetchproduct())}>Search</button> */}
      <h1 className='text-3xl font-bold text-center mt-20'>All Products 
      <Home></Home>
      </h1>
      
    </div>
  )
}
