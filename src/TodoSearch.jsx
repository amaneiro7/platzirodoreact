import React from 'react';
import './style/TodoSearch.css'

export function TodoSearch({searchValue, setSearchValue}) {
    
    const onSerchValueChange = (event) => {        
        setSearchValue(event.target.value)
    }
    return (
        <input
            className='TodoSearch'
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSerchValueChange}
        />
    );
};