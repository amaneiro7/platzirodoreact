import React from "react";
import './style/TodoCounter.css'

function TodoCounter({total, completed}) {
    
    return (
        <h2 className="todoCounter">Has completado {completed} de {total} TODOs</h2>
    );
};

export { TodoCounter };