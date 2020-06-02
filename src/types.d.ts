/* We use interface as the way to exclusively represent the shape of an obj-like data structure.
   whereas we use types to create a name of any types(undefined, null, boolean, str, num) */


type Todo = {  //the cool thing about change '.ts' to '.d.ts' is that its now a type declaration file, and we dont need to import/export it while still can be use it around the codebase. 
    text: string;
    complete: boolean;
}


type ToggleTodo = (selectedTodo: Todo) => void;

type Addtodolist = (newtodo: Todo) => void;