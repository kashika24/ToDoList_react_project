import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDos = (props) => {
  return (
    <div className="container">
      <h3 className=" my-3">ToDos List</h3>
      {props.todos.length===0? "No Todos to display" : 
      props.todos.map((todo)=>{
        return (<ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
      })
    }
    </div>
  )
}


