import {configureStore } from "@reduxjs/toolkit";
import productdata from "./Slice/productdata";

export const Store=configureStore({
    reducer:{
        data:productdata,
    }
});