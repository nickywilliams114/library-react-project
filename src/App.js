import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import DiscountedBooks from "./components/DiscountedBooks";
import Explore from "./components/Explore";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          {}
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/books/:cart"
            element={
              <Cart books={books} cart={cart} changeQuantity={changeQuantity} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
