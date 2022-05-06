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

  const displayProductCount = () => {
    return (totalProductCount > 0)
    ? <div className='item-counter'>{totalProductCount}</div>
    : null
  };

  return (
    <div className='nav'>
      <Link to='/' className='text-link'>
        <div>FORTSHOP</div>
      </Link>
      <ul className='nav-links'>
        <Link to='/' className='text-link'>
          <li>HOME</li>
        </Link>
        <Link to='/shop' className='text-link'>
          <li>SHOP</li>
        </Link>
        <Link to='/cart' className='text-link'>
          <div>
            <li>
              <Icon path={mdiCartOutline} size={1} className='cart-icon'/>
            </li>            
            {displayProductCount()}
          </div>
        </Link>
      </ul>
    </div>
  )
}

export default Nav;