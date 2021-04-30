import React, { useState } from 'react';

function SearchBar(props) {
    const { handleChange, search } = props;

    return (
        <div className="Search">
            <input className="SearchInput" id="search-bar" type="search" placeholder="Search your Hero or Villan" onChange={handleChange} value={search} />
        </div>
    );
}

export default SearchBar;