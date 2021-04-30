import React, { useState } from 'react';
import Menu from '../layout/Menu';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

import './Search.css';

function SearchIndex() {
    const url = 'https://www.superheroapi.com/api.php/4138052379586041';

    // States for get data api
    const [search, setSearch] = useState('');

    const [dataHero, setDataHero] = useState([]);


    const searchSuperHeroes = async () => {
        const res = await fetch(`${url}/search/${search}`).then(res => res.json());

        setDataHero(res.results);
    }

    // Validations for return 0 heros or more
    const handleChange = (e) => {
        const searchTerm = e.target.value;

        setSearch(searchTerm);
        if (searchTerm.length === 0) {
            setDataHero([]);
        }
        if (searchTerm.length > 3) {
            searchSuperHeroes();
        }
    }

    return (
        <>
            <Menu />
            <div className="main">
                <SearchBar search={search} handleChange={handleChange} />
                <SearchResults dataHero={dataHero} />
            </div>
        </>
    );
}

export default SearchIndex;
