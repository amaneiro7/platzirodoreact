import React from "react";
import { TodoContext } from "../TodoContext";
import { Header } from "../Header";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

export function AppUI() {
    return (
        <>
            <Header />
            <TodoCounter />
            <main className="todoContainer">
                <TodoSearch />
                <TodoContext.Consumer>
                    {({
                        error,
                        loading,
                        searchedTodos,
                        toggleCompleteTodo,
                        deleteTodos,
                    }) => (
                        <TodoList>
                            {error && <p>Desesp+erate, hubo un error...</p>}
                            {loading && <p>Estamos cargando, no desesperes...</p>}
                            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer Todo!</p>}
                            {(!loading && !error) &&
                                searchedTodos.map(todo => (
                                    <TodoItem
                                        key={todo.id}
                                        text={todo.text}
                                        completed={todo.completed}
                                        onComplete={() => toggleCompleteTodo(todo.text)}
                                        onDelete={() => deleteTodos(todo.text)}
                                    />
                                ))}
                        </TodoList>
                    )}
                </TodoContext.Consumer>
                <CreateTodoButton />
            </main>
        </>
    );
};