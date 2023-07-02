import React from "react"
import './App.css'
export const Todo =(props)=>{
    return (
        <div className='main'>
          <div className="add-todo">
            <input type='text' ref={props.inputRef}  placeholder='ENTER TASK...'/>
            <button  onClick={props.handleInput}>ADD</button>
          </div>
          <div className="display-todo">
            {props.todoList.map((todos,key)=>{
              return(
                <div key={key} className="todos">
                  <input onClick={()=>{props.changeStatus(todos.id)}} defaultChecked={todos.isComplete} type="checkbox" />
                  {console.log(todos)}
                  <h4 className={todos.isComplete?"todo-completed":"todo-not"}>{todos.task}</h4>
                  {!todos.isComplete &&<button onClick={()=>{props.removeTask(todos.id)}} >x</button>}
                </div>
              )
            })}

          </div>
      </div>
    )
}