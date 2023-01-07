import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { Header } from "../Header";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodosLoading } from "../TodosLoading";

export function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodos,
        openModal,
        setOpenModal
    } = useContext(TodoContext)
    return (
        <>
            <Header />
            <TodoCounter />
            <main className="todoContainer">
                <TodoSearch />
                <TodoList>
                    {error && <TodosError error={error}/>}
                    {loading &&  <TodosLoading/>}
                    {(!loading && !searchedTodos.length) && <EmptyTodos/>}
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
                {openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
                <CreateTodoButton 
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                />
            </main>
        </>
    );
};