import React from 'react';
import { Todolistitem } from './todolistitem';

const todos: Array<Todo> = [
  {text: 'walk in', complete: true},
  {text: 'walk out', complete: false}
]

function App() {
  return <Todolistitem todo={todos[0]}/>;
}

export default App;
