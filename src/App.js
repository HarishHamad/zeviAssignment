import React from "react";
 
import SearchBar from "./components/SearchBarModal";

import ProductList from "./components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/product" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
