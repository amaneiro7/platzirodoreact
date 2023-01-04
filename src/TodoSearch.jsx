import React, { useState } from 'react';
import './style/TodoSearch.css'

export function TodoSearch() {
    const [searchValue, setSearchValue] = useState();
    const onSerchValueChange = (event) => {
        console.log(event.target.value)
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