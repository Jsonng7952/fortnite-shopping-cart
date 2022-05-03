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
  emote
  glider
  pickaxe
  outfit
  wraps
*/

function Filter({filterResults}) {

  const handleFilter = (event) => {
    let filterValue = event.target.innerHTML.toLowerCase();
    filterResults(filterValue);
  };

  return (
    <div className='filter'>
      <div className='filter-buttons'>
        <button onClick={(event) => handleFilter(event)}>All</button>
        <button onClick={(event) => handleFilter(event)}>Emote</button>
        <button onClick={(event) => handleFilter(event)}>Glider</button>
        <button onClick={(event) => handleFilter(event)}>Pickaxe</button>
        <button onClick={(event) => handleFilter(event)}>Outfit</button>
        <button onClick={(event) => handleFilter(event)}>Wrap</button>
      </div>
    </div>
  )
}

export default Filter;