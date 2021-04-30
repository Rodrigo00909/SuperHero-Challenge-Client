import React from 'react';

// search input

function SearchBar({ handleChange, search }) {

    return (
        <div className="Search">
            <input className="SearchInput" id="search-bar" type="search" placeholder="Search your Hero or Villan" onChange={handleChange} value={search} />
        </div>
    );
}

export default SearchBar;