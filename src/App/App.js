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
import { TodosError } from "../components/TodosError/TodosError";
import { TodosEmpty } from "../components/TodosEmpty/TodosEmpty";
import { EmptySearch } from '../components/EmptySearch/EmptySearch';
import { ChangeAlertWithStorageListener } from "../components/ChangeAlert/changeAlert";

function App() {

  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, addTodo, setOpenModal, totalTodos, completedTodos, searchValue,
    setSearchValue, sincronizeTodos } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => (<TodosError />)}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <TodosEmpty />}
        onEmptySearch={() => <EmptySearch searchText={searchValue} />}
        renderTodos={todo => <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)} />}

      >
        {/* Render function: se llama con props.children y se ejecuta esta funcion */}
        {/* {todo =>
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />} */}
      </TodoList>

      {/* <TodoList>
        {error && <TodosError />}

        {loading && (<TodoLoading />)}
        {(!loading && !searchedTodos.length) && <TodosEmpty/>}

        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />

        ))}
      </TodoList> */}

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlertWithStorageListener sincronize={sincronizeTodos}/>
    </React.Fragment>
  );
}

export default App;
