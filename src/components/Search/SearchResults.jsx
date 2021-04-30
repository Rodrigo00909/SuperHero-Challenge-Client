import React from 'react';
import SearchResultItem from './SearchResultItem';

// view of hero

function SearchResults({ dataHero = [] }) {

    return (
        <div>
            {dataHero.map(hero =>
                <SearchResultItem data={hero} />
            )}
        </div>
    );
}

export default SearchResults;