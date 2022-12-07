import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoSearch.css';

function TodoSearch(  ){

    const {searchValue,setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange= (e)=>{
        setSearchValue(e.target.value);
    }

    return(
        <input className="TodoSearch" placeholder="Consultar TODOs" onChange={onSearchValueChange} value={searchValue}/>
    );
}

export {TodoSearch};