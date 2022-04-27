import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Nav from './components/Nav';
import ProductDetails from './components/pages/ProductDetails';

function RouteSwitch() {      

  const [addedProducts, setAddedProducts] = useState([]);

  // Added products are passed to the Nav & Cart component.
  const addProduct = (pCount, pId, pName, pIcon) => {
    // If the product already exist in the array, find the existing product in the array and increase the count.
    if(addedProducts.some(product => product.productId === pId)) {
      setAddedProducts(addedProducts.map(product => 
        product.productId === pId 
        // Copy all the old objects and update and append the current selected product
        ? {...product, productCount: parseInt(product.productCount) + parseInt(pCount)}
        // Else return the unmodified product
        : product
      ));      
    }
    else {
      setAddedProducts([...addedProducts, {
        productCount: pCount,
        productId: pId,
        productName: pName,
        productIcon: pIcon
      }]);      
    }

  };

  return (
    <BrowserRouter>      
      <Nav addedProducts={addedProducts}/>   
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart addedProducts={addedProducts}/>} />
        <Route path="/shop/:productId" element={<ProductDetails addProduct={addProduct}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;