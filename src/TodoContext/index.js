import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    //Estado inicial de nuestros TODOs
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);

    //Cantidad de TODOs completados
    const completedTodos = todos.filter((todo) => todo.completed).length;
    //Cantidad total de TODOs
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (searchValue.length >= 1) {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    } else {
        searchedTodos = todos;
    };


    const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };
    const addTodo = (text) => {
        const newTodos = [...todos]        
        newTodos.push({
            id: newTodos.length,
            completed: false,
            text
        })        
        saveTodos(newTodos);
    };

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            toggleCompleteTodo,
            deleteTodos,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider};