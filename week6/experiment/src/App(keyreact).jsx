import { useState } from 'react'
import React from 'react';
import './App.css'

let idsm = 4;

function App() {
  const[todos,setTodos]= useState([{
    id: 1,
    title : "study fc",
    description : "for self"
  },{
    id: 2,
    title : "go to gym",
    description : "from 7-9"
  },{
    id: 3,
    title : "write journal",
    description : "for lvl up"
  }])
  
 
  function addTodo(){
    setTodos([...todos,{
      id : idsm++,
      title : Math.random(),
      description : Math.random()
    }])

  }
  
  return (
    <div>
      <button onClick={addTodo}>Add a TODO</button>
      {todos.map(todo => <Todo key = {todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h2>{title}</h2>
    <h3>{description}</h3>
  </div>
}
export default App
