import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Nav from './components/Nav';
import ProductDetails from './components/pages/ProductDetails';

function RouteSwitch() {      

  const [itemCount, setItemCount] = useState(0);

  const addItemCount = (productInfo) => {
    setItemCount(prevCount => prevCount + 1);
    console.log(productInfo);
  };

  return (
    <BrowserRouter>      
      {console.log('BrowserRouter Loaded')} 
      <Nav itemCount={itemCount}/>   
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart itemCount={itemCount}/>} />
        <Route path="/shop/:productId" element={<ProductDetails addItemCount={addItemCount}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;