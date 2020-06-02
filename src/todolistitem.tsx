import React from 'react';

interface TodolistProps {
    todo: Todo;
}

export const Todolistitem: React.FC<TodolistProps> = ({ todo }) => {
    return <li>
        <div>
            <input type="checkbox" checked={todo.complete} />
            {todo.text}
        </div>
    </li>
    
}