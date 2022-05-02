import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import '../../css/ProductDetails.css';

function ProductDetails({addProduct}) {

  let {productId} = useParams();
  const {productName, productDescription, productIcon, productPrice} = useLocation().state;
  const [productCount, setProductCount] = useState(1);

  // When the form is submitted pass the product information to the addProduct method in the RouteSwitch.
  const handleSubmit = (e) => {
    if(productCount > 0) {
      addProduct(productCount, productId, productName, productPrice, productIcon);     
    }
    e.preventDefault();   
  };

  // Set the value of the produect count when it's changed.
  const handleProductCount = (e) => {
    setProductCount(e.target.value);
  };

  return (
    <div className='product-detail'>
      <h1>{productName}</h1>
      <div>{productDescription}</div>
      <img src={productIcon} alt='product-icon'></img>
      <div>{productPrice}</div>
      <form onSubmit={handleSubmit}>
        <input type='number' min={0} value={productCount} onChange={handleProductCount}></input>
        <button type='submit'>Add to Cart</button>
      </form>
    </div>
  )
}

export default ProductDetails;