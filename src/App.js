import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  {
    id: 1,
    text: 'Cortar cebolla',
    compleetd: false,
  },
  {
    id: 2,
    text: 'Tomar el curso de React',
    compleetd: false,
  },
  {
    id: 3,
    text: 'Armar la base de datos para la pag de ejercicio',
    compleetd: false,
  },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      
      <TodoList >
        {todos.map((todo) => (
          <TodoItem key={todo.id } text={todo.text}/>
        ))}
      </TodoList >
      <CreateTodoButton />      
    </>
  );
}

export default App;
