import React from 'react';
import SearchResultItem from './SearchResultItem';
import Home from '../Home/Home';


// view of hero

function SearchResults(props) {
    const { dataHero = [] } = props;

    return (
        <div className="Search-Hero">
            {dataHero.map(hero =>
                <SearchResultItem data={hero} />
            )}
        </div>
    );
}

export default SearchResults;