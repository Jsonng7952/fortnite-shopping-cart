import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../css/Shop.css';

function Shop() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch('https://fortnite-api.com/v2/shop/br')
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setItems(data.data);
      });
  }, []);

  return (items === undefined) ? 
    <div>Loading Data...</div> :
    <div className='shop'>
      <h1>Daily</h1>
      <div className='daily-shop'>
        {items.daily.entries.map(dailyItem => 
          <div className='product-card'>
            <Link to={`/shop/${dailyItem.items[0].id}`} className='product-link'>
              {<img src={`${dailyItem.items[0].images.icon}`} alt='product-card-icon'></img>}
              <li key={dailyItem.items[0].id}>{dailyItem.items[0].name} : {dailyItem.finalPrice}</li>
            </Link>
          </div>
        )}        
      </div>
    </div>
    

}

export default Shop;