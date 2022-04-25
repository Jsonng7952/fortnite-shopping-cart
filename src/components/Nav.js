import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
  return (
    <div className='nav'>
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
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  )
}

export default Nav;