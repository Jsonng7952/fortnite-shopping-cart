import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import '../../css/ProductDetails.css';

function ProductDetails({addProduct}) {

  let {productId} = useParams();
  const {productName, productDescription, productIcon, productPrice, vBuckIcon, productRarity} = useLocation().state;
  const [productCount, setProductCount] = useState(1);

  // When the form is submitted pass the product information to the addProduct method in the RouteSwitch.
  // Adds the product into the cart.
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
      <div className='product-info-header'>
        <div className='product-name'>{productName}</div>
        <div className='product-description'>{productDescription}</div>
        <img className={`product-icon ${productRarity}`} src={productIcon} alt='product-icon'></img>        
      </div>
      <div className='product-info-bottom'>
        <div className='product-price'><img src={vBuckIcon} alt='vbuck-icon' className='vbuck-icon'></img>{productPrice}</div>
        <form onSubmit={handleSubmit} className='product-form'>
          <input type='number' min={0} value={productCount} onChange={handleProductCount}></input>
          <button type='submit'>Add to Cart</button>
        </form>        
      </div>
    </div>
  )
}

export default ProductDetails;