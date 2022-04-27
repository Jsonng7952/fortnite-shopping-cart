import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiCartOutline } from '@mdi/js';
import '../css/Nav.css';

function Nav({addedProducts}) {

  const [totalProductCount, setTotalProductCount] = useState(0);

  useEffect(() => {
    let total = 0;
    addedProducts.forEach(productInfo => {
      total += parseInt(productInfo.productCount);
    });
    setTotalProductCount(total);
  }, [addedProducts]);

  return (
    <div className='nav'>
      <Link to='/' className='text-link'>
        <div>Fortnite Shop</div>
      </Link>
      <ul className='nav-links'>
        <Link to='/' className='text-link'>
          <li>Home</li>
        </Link>
        <Link to='/shop' className='text-link'>
          <li>Shop</li>
        </Link>
        <Link to='/cart' className='text-link'>
          <div>
            <li>
              <Icon path={mdiCartOutline} size={1} className='cart-icon'/>
            </li>            
            <div className='item-counter'>{totalProductCount}</div>            
          </div>
        </Link>
      </ul>
    </div>
  )
}

export default Nav;