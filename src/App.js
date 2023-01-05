import React from "react";
import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {
    id: 1,
    text: "Cortar cebolla",
    completed: false,
  },
  {
    id: 2,
    text: "Tomar el curso de React",
    completed: false,
  },
  {
    id: 3,
    text: "Armar la base de datos para la pag de ejercicio",
    completed: false,
  },
];

function App() {
  //Estado inicial de nuestros TODOs
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  //Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => todo.completed).length;
  //Cantidad total de TODOs
  const totalTodos = todos.length;

  let searchedTodos = []

  if (searchValue.length >= 1) {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  } else {
    searchedTodos = todos
  } 

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }
  
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  }
  
  return (
    <>
      <Header />
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <main className="todoContainer">
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </main>
    </>
  );
}

export default App;
