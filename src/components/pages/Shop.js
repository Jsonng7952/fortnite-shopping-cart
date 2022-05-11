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
    // In the case that the image w/ background is null, just get the image itself.
    let pIcon = (shopData.newDisplayAsset === null)
                ? shopData.items[0].images.icon
                : shopData.newDisplayAsset.materialInstances[0].images.Background;

    // Check to see if the data is a bundle item or not. 
    return (shopData.bundle === null)
    ? <div key={shopData.items[0].id} className={`product-card ${shopData.items[0].rarity.value}`}>
        <Link className='product-link'
          to={{
            pathname:`/shop/${shopData.items[0].id}`
          }}
          state= {{
            productName: shopData.items[0].name.toUpperCase(), 
            productDescription: shopData.items[0].description,
            productIcon: pIcon,
            productPrice: shopData.finalPrice,
            vBuckIcon: items.vbuckIcon,
            productRarity: shopData.items[0].rarity.value
          }}
        >
          {<img src={`${pIcon}`} alt='product-card-icon'></img>}
          <div className='product-shop-info'>
            <div>{shopData.items[0].name.toUpperCase()}</div>
            <div><img src={items.vbuckIcon} alt='vbuck-icon' className='vbuck-icon'></img>{shopData.finalPrice}</div>
          </div>

        </Link>
      </div>    
    : <div key={shopData.bundle.name.split(' ').join('_')} className='product-card'>
        <Link className='product-link'
          to={{
            pathname: `/shop/${shopData.bundle.name.split(' ').join('_')}`
          }} 
          state= {{
            productName: shopData.bundle.name.toUpperCase(), 
            productDescription: shopData.bundle.info,
            productIcon: pIcon,
            productPrice: shopData.finalPrice,
            vBuckIcon: items.vbuckIcon,
            productRarity: ''
          }}                        
        >
          {<img src={`${pIcon}`} alt='product-card-icon'></img>}
          <div className='product-shop-info'>
            <div>{shopData.bundle.name.toUpperCase()}</div>
            <div><img src={items.vbuckIcon} alt='vbuck-icon' className='vbuck-icon'></img>{shopData.finalPrice}</div>
          </div>
        </Link>
      </div>
  };

  return (items === undefined) ? 
    <div>Loading Data...</div> :
    <div className='shop'>
      <Filter filterResults={filterResults}/>
      <div className='shop-header'>Daily</div>
      <div className='daily-shop'>
        { // Filter the items 
        (filteredResults === 'all' || filteredResults === '') 
          ? items.daily.entries.map(dailyItem => displayShop(dailyItem))  
          : items.daily.entries
            .filter(dailyItem => dailyItem.items[0].type.value === filteredResults)
            .map(dailyItem => displayShop(dailyItem))
        }
      </div>
      <div className='shop-header'>Featured</div>
      <div className='featured-shop'>
        { // If the filtered item is in the bundle, display the bundle.
        (filteredResults === 'all' || filteredResults === '') 
          ? items.featured.entries.map(featuredItem => displayShop(featuredItem))  
          : items.featured.entries
            .filter(featuredItem => featuredItem.items[0].type.value === filteredResults 
              || (featuredItem.bundle !== null && featuredItem.items.some(item => item.type.value === filteredResults)))
            .map(featuredItem => displayShop(featuredItem))
        }
      </div>
      <div className='shop-header'>Special Featured</div>
      <div className='special-featured-shop'>
        { // If the filtered item is in the bundle, display the bundle. 
        (filteredResults === 'all' || filteredResults === '') 
          ? items.specialFeatured.entries.map(specialFeatured => displayShop(specialFeatured))  
          : items.specialFeatured.entries
            .filter(specialFeatured => specialFeatured.items[0].type.value === filteredResults 
              || (specialFeatured.bundle !== null && specialFeatured.items.some(item => item.type.value === filteredResults)))
            .map(specialFeatured => displayShop(specialFeatured))
        }
      </div>      
    </div>
    
}

export default Shop;