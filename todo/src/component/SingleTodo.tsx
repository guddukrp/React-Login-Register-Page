import React, { useEffect, useRef, useState } from 'react'
import './SingleTodo.css'
import { Todo } from '../model';
import { MdEdit, MdDelete, MdDone } from "react-icons/md";

interface Props{
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,todos,setTodos}:Props) => {

  const[edit,setEdit]= useState<boolean>();
  const[editTodo,setEditTodo]=useState<string>(todo.todo);



  const handleDone=(id:number)=>{
    setTodos(
      todos.map((todo)=>
        todo.id===id ? {...todo, isDone:!todo.isDone}:todo
      )
    );
  }

  const handleDelete=(id:number)=>{
    setTodos(
      todos.filter((todo)=>todo.id!==id )
    );
  }
  const handleEdit=(e:React.FormEvent,id:number)=>{
    e.preventDefault();
    setTodos(todos.map((todo)=>(
      todo.id===id?{...todo,todo:editTodo}:todo
    )));
    setEdit(false);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    inputRef.current?.focus();
  },[edit]);


  return (
    <form className='todos_single' onSubmit={(e)=>handleEdit(e,todo.id)}>
      {
        edit?(
          <input 
          ref = {inputRef}
          value={editTodo} 
          onChange={(e)=>setEditTodo(e.target.value)} 
          className='todos_single_text'/>
        ):
          todo.isDone?(

            <s className='todos_single_text'> {todo.todo}</s>
          ):(
  
            <span className='todos_single_text'> {todo.todo}</span>
          )
        
      }
    
        <div>
            <span className="icon"  onClick={ ()=>{
              if(!edit && !todo.isDone){
                setEdit(!edit)
              }
            }}><MdEdit /></span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}><MdDelete /></span>
            <span className="icon" onClick={()=>handleDone(todo.id)}><MdDone /></span>
        </div>
    </form>
  )
}

export default SingleTodo