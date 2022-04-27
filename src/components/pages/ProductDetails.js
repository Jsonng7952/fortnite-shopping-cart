import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../../css/ProductDetails.css';

function ProductDetails({addProduct}) {

  let {productId} = useParams();
  const [item, setItem] = useState();
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    fetch(`https://fortnite-api.com/v2/cosmetics/br/${productId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setItem(data.data);
      });
  }, [productId]);

  // When the form is submitted pass the product information to the addProduct method in the RouteSwitch.
  const handleSubmit = (e) => {
    if(productCount > 0) {
      addProduct(productCount, item.id, item.name, item.images.icon);     
    }
    e.preventDefault();   
  };

  // Set the value of the produect count when it's changed.
  const handleProductCount = (e) => {
    setProductCount(e.target.value);
  };

  return (item === undefined) 
  ? <div>Loading Product Details...</div> 
  : <div className='product-detail'>
      <h1>{item.name}</h1>
      <div>{item.description}</div>
      <img src={`${item.images.icon}`} alt='product-icon'></img>
      <form onSubmit={handleSubmit}>
        <input type='number' min={0} onChange={handleProductCount}></input>
        <button type='submit'>Add to Cart</button>
      </form>
    </div>
}

export default ProductDetails;