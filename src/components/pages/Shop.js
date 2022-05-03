import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../css/Shop.css';
import Filter from '../Filter';

function Shop() {
  const [items, setItems] = useState();
  const [filteredResults, setFilteredResults] = useState('');

  useEffect(() => {
    fetch('https://fortnite-api.com/v2/shop/br')
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setItems(data.data);
      });
  }, []);

  const filterResults = (filterValue) => {
    setFilteredResults(filterValue);
  };

  // Displays the shop data from the Fornite API.
  const displayShop = (shopData) => {
    // Check to see if the data is a bundle item or not. 
    return (shopData.bundle === null)
    ? <div key={shopData.items[0].id} className='product-card'>
        <Link className='product-link'
          to={{
            pathname:`/shop/${shopData.items[0].id}`
          }}
          state= {{
            productName: shopData.items[0].name, 
            productDescription: shopData.items[0].description,
            productIcon: shopData.items[0].images.featured,
            productPrice: shopData.finalPrice
          }}
        >
          {<img src={`${shopData.items[0].images.featured}`} alt='product-card-icon'></img>}
          <div>{shopData.items[0].name} : {shopData.finalPrice}</div>
          <div>{shopData.items[0].type.value} : {shopData.items[0].rarity.value}</div>
        </Link>
      </div>    
    : <div key={shopData.bundle.name.split(' ').join('_')} className='product-card'>
        <Link className='product-link'
          to={{
            pathname: `/shop/${shopData.bundle.name.split(' ').join('_')}`
          }} 
          state= {{
            productName: shopData.bundle.name, 
            productDescription: shopData.bundle.info,
            productIcon: shopData.bundle.image,
            productPrice: shopData.finalPrice
          }}                        
        >
          {<img src={`${shopData.bundle.image}`} alt='product-card-icon'></img>}
          <div>{shopData.bundle.name} : {shopData.finalPrice}</div>
        </Link>
      </div>
  };

  return (items === undefined) ? 
    <div>Loading Data...</div> :
    <div className='shop'>
      <Filter filterResults={filterResults}/>
      <h1>Daily</h1>
      <div className='daily-shop'>
        {(filteredResults === 'all' || filteredResults === '') 
          ? items.daily.entries.map(dailyItem => displayShop(dailyItem))  
          : items.daily.entries
            .filter(dailyItem => dailyItem.items[0].type.value === filteredResults)
            .map(dailyItem => displayShop(dailyItem))
        }
      </div>
      <h1>Featured</h1>
      <div className='featured-shop'>
        {(filteredResults === 'all' || filteredResults === '') 
          ? items.featured.entries.map(featuredItem => displayShop(featuredItem))  
          : items.featured.entries
            .filter(featuredItem => featuredItem.items[0].type.value === filteredResults)
            .map(featuredItem => displayShop(featuredItem))
        }
      </div>
      <h1>Special Featured</h1>
      <div className='special-featured-shop'>
        {(filteredResults === 'all' || filteredResults === '') 
          ? items.specialFeatured.entries.map(specialFeatured => displayShop(specialFeatured))  
          : items.specialFeatured.entries
            .filter(specialFeatured => specialFeatured.items[0].type.value === filteredResults)
            .map(specialFeatured => displayShop(specialFeatured))
        }
      </div>      
    </div>
    
}

export default Shop;