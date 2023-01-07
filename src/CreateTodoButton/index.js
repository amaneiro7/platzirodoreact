import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const {setOpenModal, openModal} = useContext(TodoContext);
    const onClickButton = () => {                    
        setOpenModal(!openModal);
    }
    return(
        <button className="CreateTodoButton"
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton};