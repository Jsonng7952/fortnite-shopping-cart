import React from 'react';
import '../../css/Cart.css';

function Cart({itemCount}) {

  return (
    <div className='cart'>
      Cart{itemCount}
    </div>
  )
}

export default Cart;