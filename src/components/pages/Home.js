import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/Home.css';

function Home() {

  return (
    <div className='home'>
      <Link to='/shop' className='home-text-link'>
        SHOP NOW
      </Link>
    </div>
  )
}

export default Home;