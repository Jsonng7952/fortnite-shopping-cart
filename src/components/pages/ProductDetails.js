import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../../css/ProductDetails.css';

function ProductDetails({addItemCount}) {

  let {productId} = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    fetch(`https://fortnite-api.com/v2/cosmetics/br/${productId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setItem(data.data);
      });
  }, [productId]);

  return (item === undefined) ? 
    <div>Loading Product Details...</div> :
    <div className='product-detail'>
      <h1>{item.name}</h1>
      <div>{item.description}</div>
      <img src={`${item.images.icon}`} alt='product-icon'></img>
      <button onClick={() => addItemCount(item.name)}>Add to Cart</button>
    </div>
}

export default ProductDetails;