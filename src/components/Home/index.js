import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct } from "../../Redux/Slice/productdata";
import { Link } from 'react-router-dom';

// import Product from "../Product";
// import { Store } from "../../Redux/Store";
// import productdata from "../../Redux/Slice/productdata";
// import { current } from "@reduxjs/toolkit";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data);


  useEffect(() => {
    let dispatchedata = dispatch(fetchproduct());
    console.log("UseEffect");
    let ids=items.data?.id;
    //console.log(ids);
  }, []);
  return (
   
    <>
 
       
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto  ">
          <div className="flex flex-wrap -m-4 ">
            {items.data?.map((item) => {
              return (
             
                <div  key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full h-fullbg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200">
                   
                     <Link to="/product">
                
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      src={item.image}
                      className="object-cover object-center block  rounded"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {item.title}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.category}
                    </h2>
                    <p className="mt-1">{item.price}Rs</p>
                  </div>
                  
                  </Link>
             
                </div>
              
              );
            })}
          </div>
        </div>
      </section>
     
  
    </>

  );
}
