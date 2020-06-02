import React, { useState } from 'react';
import { Addtodoform } from './addtodoform';
import { Todolist } from './todolist';

const initialtodos: Array<Todo> = [
  {text: 'walk in', complete: true},
  {text: 'walk out', complete: false}
]

function App() {

  const [todos, settodos] = useState(initialtodos)

  const toggleTodo:ToggleTodo = selectedTodo => {
    const newTodo = todos.map(todo=>{
      if(todo===selectedTodo){
        return {
          ...todo, complete: !todo.complete
        }
      }
      return todo;
    })
    settodos(newTodo);
  }

  const addtodolist:Addtodolist = newtodo => {
    settodos([...todos,newtodo]);
  }

  return(
    <React.Fragment>
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <Addtodoform addtodolist={addtodolist} />

    </React.Fragment>
  ) 
}

export default App;
