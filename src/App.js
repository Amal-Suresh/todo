
import './App.css';
import React from 'react';
import { useState,useRef } from 'react';
import {Todo} from './Todo'

function App() {

  const [todoList,setTodoList]=useState([])
  const inputRef=useRef(null)


  const handleInput =()=>{
    if(inputRef.current.value!==""){

      inputRef.current.focus()
      let task={
        id:todoList.length===0?0:todoList[todoList.length-1].id+1,
        task:inputRef.current.value,
        isComplete:false
      }
      setTodoList([...todoList,task])
      inputRef.current.value=""
    }
  }

  const removeTask =(id)=>{
    setTodoList(todoList.filter((task)=>{return task.id!==id}))  
  }

  const changeStatus =(id)=>{
    setTodoList(
      todoList.map((todo)=>{
        if(todo.id===id){
          if(todo.isComplete===true){
             return {...todo,isComplete:false}
          }else{
            return {...todo,isComplete:true}
          }
        }else{
          return todo
        }
      })
    )
  }




  return (
    <div className="App">
      <div><h1 style={{color:"red"}}>TODO APP</h1></div>
      <Todo inputRef={inputRef} handleInput={handleInput} todoList={todoList} changeStatus={changeStatus} removeTask={removeTask}/>
    </div>
  );
}

export default App;
