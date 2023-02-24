import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  //console.log("Received props in Todos Comoponenet",props)
  let myStyle ={
    minHeight:"70vh",
    margin: "50px auto"
  }
  return (
    <div className="container" style = {myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length==0? "No todos to display":
      props.todos.map((todo)=>{  //if todo length is 0 the disply nodo else display this
        return( 
        <>
        <TodoItem todo={todo} key={props.todos.sno} onDelete={props.onDelete}/> <hr/>
        </>
        )
      })
    }
    </div>
  )
}

export default Todos
