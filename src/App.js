import React from "react";
import "./App.css";

import AllContent from "./modules/AllContent";
import Home from "./components/Home";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AllContent></AllContent>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
