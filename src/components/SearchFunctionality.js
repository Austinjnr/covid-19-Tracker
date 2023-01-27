import React, { useState } from 'react';

function SearchFunctionality({setSearchTerm}) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="search-bar-container">
      <input 
        type="text" 
        placeholder="Search for a country..." 
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchFunctionality;
