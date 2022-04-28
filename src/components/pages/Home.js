import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/Home.css';

function Home() {

  return (
    <div className='home'>
      Home
      <Link to='/shop'>
        Shop
      </Link>
    </div>
  )
}

export default Home;