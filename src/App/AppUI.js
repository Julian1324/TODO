import React from "react";
import { TodoHeader } from '../components/TodoHeader/TodoHeader'
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../components/TodoContext/TodoContext";
import { Modal } from '../Modal/Modal';
import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodoLoading } from "../components/TodoLoading/TodoLoading";
// import { TodoLoading } from "../components/TodoLoading/TodoLoading";

function AppUI() {

    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, totalTodos, completedTodos, searchValue,
        setSearchValue } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            </TodoHeader>

            <TodoList>
                {error && <p>Hubo un error</p>}

                {loading && (<TodoLoading />)}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)} />

                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
}

export { AppUI };