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
      <div className='cart-header'>Your Shopping Cart</div>
      <div>Shopping Cart is Empty</div>
    </div>
  : <div className='cart'>
      <div className='cart-header'>Your Shopping Cart</div>
      {addedProducts.map(product => 
        <div key={product.productId} className='cart-list'>
          <img className={`cart-product-icon ${product.productRarity}`} src={product.productIcon} alt='product-icon'></img>
          <div className='cart-product-title'>{product.productName}</div>
          <div className='cart-product-count'>
            <button onClick={() => handleButtonClick(product.productCount, product.productId, 'increment')}>Add</button>
            <input type='number' value={product.productCount} onChange={(event) => handleChange(event, product.productId)} ></input>
            <button onClick={() => handleButtonClick(product.productCount, product.productId, 'decrement')}>Sub</button>
          </div>
        </div>
      )}
      <div className='cart-total-price'>Total: {totalPrice}</div>
      <button className='cart-checkout-button'>Checkout</button>
    </div>
}

export default Cart;