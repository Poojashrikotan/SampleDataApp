import React from "react";
import "./App.css";

import AllContent from "./modules/AllContent";
import Home from "./components/Home";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AllContent></AllContent>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cartpage/:id" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
