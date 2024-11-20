import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import ProductDetails from "./components/ProductDetails"


function App() {

  return (
    <>
      <Navbar />
      <Router>
            <Routes>
                <Route path="/" element={<ProductList />} /> {/* Home route for product list */}
                <Route path="/products/:id" element={<ProductDetails />} /> {/* Route for product details */}
            </Routes>
        </Router>
      
    </>
  )
}

export default App
