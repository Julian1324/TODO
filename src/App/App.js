//import './App.css';
import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from '../components/TodoHeader/TodoHeader'
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { Modal } from '../Modal/Modal';
import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodoLoading } from "../components/TodoLoading/TodoLoading";

function App() {

  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, addTodo, setOpenModal, totalTodos, completedTodos, searchValue,
    setSearchValue} = useTodos();

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
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
