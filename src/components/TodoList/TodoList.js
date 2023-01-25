import React from "react";
import './TodoList.css';

function TodoList({ error, onError, loading, onLoading, searchedTodos, onEmptyTodos, totalTodos, onEmptySearch, renderTodos, children }) {

    const renderFunction = children || renderTodos;
    return (
        <section className="TodoList">
            {error && onError()}
            {!!loading && onLoading()}
            {(!loading && !totalTodos) && onEmptyTodos()}
            {(!!totalTodos && !searchedTodos.length) && onEmptySearch()}
            {/* {searchedTodos.map((todos) => renderTodos(todos))} */}
            {/* Manera más corta de hacer render: */}
            { (!loading && !error) && searchedTodos.map(renderFunction)}

        </section>
    );
}

export { TodoList };