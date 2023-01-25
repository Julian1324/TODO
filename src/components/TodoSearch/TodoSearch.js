import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <input className="TodoSearch" placeholder="Consultar TODOs" onChange={onSearchValueChange} value={searchValue} disabled={loading}/>
    );
}

export { TodoSearch };