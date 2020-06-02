import React from 'react';
import { Todolistitem } from './todolistitem';

interface Todolistprops {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const Todolist:React.FC<Todolistprops> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo=>{
                return <Todolistitem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            })}
        </ul>
    )
}