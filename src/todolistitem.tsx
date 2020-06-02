import React from 'react';
import './todolistitem.css';

interface TodolistProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const Todolistitem: React.FC<TodolistProps> = ({ todo,toggleTodo }) => {
    
    return <li>
            <div className={todo.complete?"complete":undefined}>
                <input type="checkbox" checked={todo.complete} onChange={()=> toggleTodo(todo)} />
                {todo.text}
            </div>
           </li>
    
}