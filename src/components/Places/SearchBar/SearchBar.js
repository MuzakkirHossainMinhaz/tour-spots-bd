import React from 'react';
import './SearchBar.css'

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
    <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
            <input
                type='text'
                placeholder='Search by District'
                value={value}
                onChange={handleSearchKey}
            />
            {value && <span onClick={clearSearch}>X</span>}
            <button className='px-4'>Search</button>
        </form>
    </div>
);

export default SearchBar;