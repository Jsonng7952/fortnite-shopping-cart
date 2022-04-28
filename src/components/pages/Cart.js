import React, { useState, useEffect } from 'react';
import '../../css/Cart.css';

function Cart({addedProducts, changeProductCount}) {

  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Calculate the total of the cost of the products currently in the cart.
  useEffect(() => {
    let total = 0;
    if(addedProducts.length > 0) {
      addedProducts.forEach(product => {
        total += (parseInt(product.productCount) * parseInt(product.productPrice));
      });
      setTotalPrice(total);
    }
  }, [addedProducts]);

  const handleProductCount = (pCount, pId) => {
    changeProductCount(pCount, pId);
  };
 
  return (addedProducts.length === 0) 
  ? <div className='cart'>
      <h1>Your Shopping Cart</h1>
      <div>Shopping Cart is Empty</div>
    </div>
  : <div className='cart'>
      <h1>Your Shopping Cart</h1>
      {addedProducts.map(product => 
        <div className='cart-list'>
          <li key={product.productId}>{`${product.productName} | ${product.productId} | ${product.productCount} | ${product.productPrice}`}</li>
          <div className='cart-product-count'>
            <button onClick={() => handleProductCount(product.productCount, product.productId)}>Add</button>
            <input type='number' value={product.productCount} onChange={() => changeProductCount(product.productCount, product.productId)}></input>
            <button onClick={() => handleProductCount(product.productCount, product.productId)}>Sub</button>
          </div>
        </div>
      )}
      <h1>Total: {totalPrice}</h1>
      <button>Checkout</button>
    </div>
}

export default Cart;