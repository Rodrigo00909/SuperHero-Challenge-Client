import React, { useState } from 'react';
import Menu from '../layout/Menu';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { URL_API } from '../../Api/api';



import './Search.css';

function SearchIndex() {

    // States for get data api
    const [search, setSearch] = useState('');

    const [dataHero, setDataHero] = useState([]);


    const searchSuperHeroes = async () => {
        const res = await fetch(`${URL_API}/search/${search}`).then(res => res.json());
        // const res = await api.get(`${URL_API}/search/${search}`);

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
            <div className="Container">
                <SearchBar search={search} handleChange={handleChange} />
                <SearchResults dataHero={dataHero} />
            </div>
        </>
    );
}

export default SearchIndex;
