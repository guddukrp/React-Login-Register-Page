
import { useState } from 'react'
import './App.css'
import InputFeild from './component/InputFeild'
import { Todo } from './model';
import TodoList from './component/TodoList';

const App:React.FC=()=> {

  const [todo,setTodo]= useState<string>("");

  const [todos, setTodos] =useState<Todo[]>([]);
  
  const handleAdd = (e:React.FormEvent)=> {
      e.preventDefault();

      if(todo){
        setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
        setTodo("");
      }
  };

  console.log(todos);

  return (
    <>
    <div className='app'>
      <span className='heading'>Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
    </>
  )
}

export default App
