import React from 'react';
import {Link} from 'react-router-dom';

function Home() {

  return (
    <div>
      Home
      <Link to='/shop'>
        Shop
      </Link>
    </div>
  )
}

export default Home;