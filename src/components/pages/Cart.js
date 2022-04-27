import React from 'react';
import '../../css/Cart.css';

function Cart({addedProducts}) {

  return (
    <div className='cart'>
      <h1>Your Shopping Cart</h1>
      {addedProducts.map(product => 
        <div>
          <li key={product.productId}>{`${product.productName} | ${product.productId} | ${product.productCount}`}</li>
          <input type='number' value={product.productCount}></input>
        </div>
      )}
    </div>
  )
}

export default Cart;