import React from 'react';

// search structure

function SearchResultItem({ data }) {

    return (
        <>
            <div>
                <img src={data.image.url} alt="super pic" />
            </div>
            <div className="right">
                <h1>{data.name}</h1>
                <button>Add to the team</button>

            </div>
        </>
    );
}

export default SearchResultItem;