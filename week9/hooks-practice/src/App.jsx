import { useState ,useEffect } from 'react'
import './App.css'
import axios from "axios";

function useTodos(n){
  const [todos,setTodos] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    const value = setInterval(()=>{
      axios.get("https://sum-backend.onrender.com/todos")
    .then(res=>{
      setTodos(res.data.todos);
      setLoading(false);
    })
    },n*1000)

    axios.get("https://sum-backend.onrender.com/todos")
    .then(res=>{
      setTodos(res.data.todos);
      setLoading(false);
    })

    return ()=>{
      clearInterval(value);
    }

  },[n]);

  return {todos,loading};
}


function App() {
  const {todos,loading} = useTodos(5);

  return (
    <>
    {loading ? "Loading..." : todos.map(todo=> <Track todo = {todo} key = {todo.id}/>) }
    </>
  )
}

function Track({todo}){
  return <div>
    {todo.title}
    <br/>
    {todo.description}

  </div>
}


export default App
