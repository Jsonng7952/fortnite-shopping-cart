import React, {useState} from 'react'
import '../css/Filter.css';

function Filter({filterResults}) {

  const [selectedButton, setSelectedButton] = useState('all');

  const handleFilter = (filterValue) => {
    filterResults(filterValue);
    setSelectedButton(filterValue);
  };

  return (
    <div className='filter'>
      <div className='filter-buttons'>
        <button className={(selectedButton === 'all') ? 'select' : ''} onClick={() => handleFilter('all')}>All</button>
        <button className={(selectedButton === 'backpack') ? 'select' : ''} onClick={() => handleFilter('backpack')}>Backpack</button>
        <button className={(selectedButton === 'emote') ? 'select' : ''} onClick={() => handleFilter('emote')}>Emote</button>
        <button className={(selectedButton === 'glider') ? 'select' : ''} onClick={() => handleFilter('glider')}>Glider</button>
        <button className={(selectedButton === 'pickaxe') ? 'select' : ''} onClick={() => handleFilter('pickaxe')}>Pickaxe</button>
        <button className={(selectedButton === 'loadingscreen') ? 'select' : ''} onClick={() => handleFilter('loadingscreen')}>Loading Screen</button>
        <button className={(selectedButton === 'outfit') ? 'select' : ''} onClick={() => handleFilter('outfit')}>Outfit</button>
        <button className={(selectedButton === 'wrap') ? 'select' : ''} onClick={() => handleFilter('wrap')}>Wrap</button>
      </div>
    </div>
  )
}

export default Filter;