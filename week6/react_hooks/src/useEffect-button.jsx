import { useEffect, useState } from 'react'
import axios from "axios";




function App() {
  const[selectedid,setselectedid]=useState(1)
  return <div>
    <button onClick={function(){
      setselectedid(1);
    }}>1</button>

    <button onClick={function(){
      setselectedid(2);
    }}>2</button>


    <button onClick={function(){
      setselectedid(3);
    }}>3</button>

    <button onClick={function(){
      setselectedid(4);
    }}>4</button>


    <Todo id={selectedid} />
  </div>

}

function Todo({id}){
  const [todos,setTodos]=useState({})
  
  useEffect(()=>{
    axios.get(`https://sum-backend.onrender.com/todos?id=${id}`)
    .then(response=>{
      console.log("API Response:", response.data);
      setTodos(response.data.todos)
    })
  },[id])
  
  return <div>
    <h3>ID:{id}</h3>
    <h1>{todos.title}</h1>
    <h2>{todos.description}</h2>
  </div>
}

export default App
