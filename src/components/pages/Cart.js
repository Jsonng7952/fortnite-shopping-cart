import React, { useState, useEffect } from 'react';
import '../../css/Cart.css';

function Cart({addedProducts, changeProductCount}) {

  const [totalPrice, setTotalPrice] = useState(0);

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

  // Increment product count when pressing the + or - button.
  const handleButtonClick = (pCount, pId, isAdd) => {
    (isAdd === 'increment') 
    ? changeProductCount(parseInt(pCount) + 1, pId)
    :  changeProductCount(parseInt(pCount) - 1, pId)
  };

  // Changes the input for the product count.
  const handleChange = (event, pId) => { 
    changeProductCount(event.target.value, pId);
  };

  return (addedProducts.length === 0) 
  ? <div className='cart'>
      <h1>Your Shopping Cart</h1>
      <div>Shopping Cart is Empty</div>
    </div>
  : <div className='cart'>
      <h1>Your Shopping Cart</h1>
      {addedProducts.map(product => 
        <div key={product.productId} className='cart-list'>
          <li>{`${product.productName} | ${product.productId} | ${product.productCount} | ${product.productPrice}`}</li>
          <div className='cart-product-count'>
            <button onClick={() => handleButtonClick(product.productCount, product.productId, 'increment')}>Add</button>
            <input type='number' value={product.productCount} onChange={(event) => handleChange(event, product.productId)} ></input>
            <button onClick={() => handleButtonClick(product.productCount, product.productId, 'decrement')}>Sub</button>
          </div>
        </div>
      )}
      <h1>Total: {totalPrice}</h1>
      <button>Checkout</button>
    </div>
}

export default Cart;