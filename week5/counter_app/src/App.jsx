import { useState } from "react";

function App() {
  const [todos, setTodos]= useState([{
    title : "Go to gym",
    description : "Go to gym for workout from 7-9",
    completed : false
  },{
    title : "study full stack",
    description : "study full stack from yt and docs",
    completed : true
  }]);

  function addTodo(){
    setTodos([...todos,{
      title:"New todo",
      description : "description"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(function(todo){
        return <Todo title = {todo.title} description = {todo.description} />
      })}

    </div>
  )
}


function Todo (props){

  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
