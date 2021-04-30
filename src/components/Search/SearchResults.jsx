import React from 'react';
import SearchResultItem from './SearchResultItem';

function SearchResults(props) {
    const { dataHero = [] } = props;

    console.log('dataHero', dataHero);
    return (
        <div>
            {dataHero.map(hero =>
                <SearchResultItem data={hero} />
            )}
        </div>
    );
}

export default SearchResults;