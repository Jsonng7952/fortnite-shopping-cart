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
          <div key={dailyItem.items[0].id} className='product-card'>
            <Link className='product-link'
              to={{
                pathname:`/shop/${dailyItem.items[0].id}`
              }}
              state= {{
                productName: dailyItem.items[0].name, 
                productDescription: dailyItem.items[0].description,
                productIcon: dailyItem.items[0].images.icon,
                productPrice: dailyItem.finalPrice
              }}
            >
              {<img src={`${dailyItem.items[0].images.icon}`} alt='product-card-icon'></img>}
              <li>{dailyItem.items[0].name} : {dailyItem.finalPrice}</li>
            </Link>
          </div>
        )}        
      </div>
      <h1>Featured</h1>
      <div className='featured-shop'>
        {items.featured.entries.map(featuredItem => {
          // Check to see if item is a bundle or not.
          if(featuredItem.bundle === null) {
            return (
              <div key={featuredItem.items[0].id} className='product-card'>
                <Link className='product-link'
                  to={{
                    pathname: `/shop/${featuredItem.items[0].id}`
                  }} 
                  state= {{
                    productName: featuredItem.items[0].name, 
                    productDescription: featuredItem.items[0].description,
                    productIcon: featuredItem.items[0].images.icon,
                    productPrice: featuredItem.finalPrice
                  }}                  
                >
                  {<img src={`${featuredItem.items[0].images.icon}`} alt='product-card-icon'></img>}
                  <li>{featuredItem.items[0].name} : {featuredItem.finalPrice}</li>
                </Link>
              </div>                 
            )
          }
          else {
            return (
              <div key={featuredItem.bundle.name.split(' ').join('_')} className='product-card'>
                <Link className='product-link'
                  to={{
                    pathname: `/shop/${featuredItem.bundle.name.split(' ').join('_')}`
                  }} 
                  state= {{
                    productName: featuredItem.bundle.name, 
                    productDescription: featuredItem.bundle.info,
                    productIcon: featuredItem.bundle.image,
                    productPrice: featuredItem.finalPrice
                  }}                        
                >
                  {<img src={`${featuredItem.bundle.image}`} alt='product-card-icon'></img>}
                  <li>{featuredItem.bundle.name} : {featuredItem.finalPrice}</li>
                </Link>
              </div>                   
            )
          }
        })}
      </div>
      <h1>Special Featured</h1>
      <div className='special-featured-shop'>
        {items.specialFeatured.entries.map(specialFeaturedItem => {
          // Check to see if item is a bundle or not.          
          if(specialFeaturedItem.bundle === null) {
            return (
              <div key={specialFeaturedItem.items[0].id} className='product-card'>
                <Link className='product-link'
                  to={{
                    pathname: `/shop/${specialFeaturedItem.items[0].id}`
                  }} 
                  state= {{
                    productName: specialFeaturedItem.items[0].name, 
                    productDescription: specialFeaturedItem.items[0].description,
                    productIcon: specialFeaturedItem.items[0].images.icon,
                    productPrice: specialFeaturedItem.finalPrice
                  }}                   
                >
                  {<img src={`${specialFeaturedItem.items[0].images.icon}`} alt='product-card-icon'></img>}
                  <li>{specialFeaturedItem.items[0].name} : {specialFeaturedItem.finalPrice}</li>
                </Link>
              </div>                 
            )
          }
          else {
            return (
              <div key={specialFeaturedItem.bundle.name.split(' ').join('_')} className='product-card'>
                <Link className='product-link'
                  to={{
                    pathname: `/shop/${specialFeaturedItem.bundle.name.split(' ').join('_')}`
                  }} 
                  state= {{
                    productName: specialFeaturedItem.bundle.name, 
                    productDescription: specialFeaturedItem.bundle.info,
                    productIcon: specialFeaturedItem.bundle.image,
                    productPrice: specialFeaturedItem.finalPrice
                  }}                     
                >
                  {<img src={`${specialFeaturedItem.bundle.image}`} alt='product-card-icon'></img>}
                  <li>{specialFeaturedItem.bundle.name} : {specialFeaturedItem.finalPrice}</li>
                </Link>
              </div>                   
            )
          }
        })}
      </div>      
    </div>
    

}

export default Shop;