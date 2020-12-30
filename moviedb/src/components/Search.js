import React from 'react'

const Search = ({handleInput, term, search}) => {
    return (
        <section className="searchBox-wrap">
            <input 
                value={term} 
                onChange={handleInput}
                onKeyPress={search}
                type="text" 
                placeholder="Search for a movie..." 
                className="searchBox"/>
        </section>
    )
}

export default Search