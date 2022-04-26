import React from 'react';
import {Link} from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiCartOutline } from '@mdi/js';
import '../css/Nav.css';

function Nav({itemCount}) {
  return (
    <div className='nav'>
      {console.log('Nav Loaded')}
      <Link to='/' className='text-link'>
        <div>Fortnite Daily</div>
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
            <div className='item-counter'>{itemCount}</div>            
          </div>
        </Link>
      </ul>
    </div>
  )
}

export default Nav;