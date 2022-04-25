import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Nav from './components/Nav';
import ProductDetails from './components/pages/ProductDetails';

function RouteSwitch() {      
  return (
    <BrowserRouter>          
      <Nav />   
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;