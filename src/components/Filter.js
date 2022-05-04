import React from 'react'
import '../css/Filter.css';

/*
  In-game
  BackBling
  Emotes
  Emoticons
  Gliders
  Pickaxes
  loadings screens
  music 
  outfits
  contrails
  sprays
  toys
  umbrellas

  Seen in API
  backpack
  emote
  glider
  pickaxe
  loadings screens
  outfit
  wraps
*/

function Filter({filterResults}) {

  const handleFilter = (filterValue) => {
    filterResults(filterValue);
  };

  return (
    <div className='filter'>
      <div className='filter-buttons'>
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('backpack')}>Backpack</button>
        <button onClick={() => handleFilter('emote')}>Emote</button>
        <button onClick={() => handleFilter('glider')}>Glider</button>
        <button onClick={() => handleFilter('pickaxe')}>Pickaxe</button>
        <button onClick={() => handleFilter('loadingscreen')}>Loading Screen</button>
        <button onClick={() => handleFilter('outfit')}>Outfit</button>
        <button onClick={() => handleFilter('wrap')}>Wrap</button>
      </div>
    </div>
  )
}

export default Filter;