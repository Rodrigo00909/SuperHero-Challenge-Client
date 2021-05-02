import React from 'react';
import { Link } from 'react-router-dom'


// search structure

/*                 <span style={{ color: 'gray', marginBottom: 5 }}>{data.biography['full-name']}</span>
                <div className="stats">
                    <div>strength: {data.powerstats.strength}</div>
                    <div>speed: {data.powerstats.speed}</div>
                    <div>power: {data.powerstats.power}</div>
                </div> */

function SearchResultItem({ data }) {

    return (
        <>
            <div className="Search-Div">
                <div className="Search-Hero-Title">
                    <h3>{data.name}</h3>
                </div>
                <div className="Search-Div-Img" >
                    <img className="Search-Img" src={data.image.url} alt="super pic" />
                </div>
                <div className="Search-Div-Button">
                    <button className="Search-Button">Add to the team</button>
                    <Link to={`/character/${data.id}`}>
                        <button className="Search-Button">See Details</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SearchResultItem;