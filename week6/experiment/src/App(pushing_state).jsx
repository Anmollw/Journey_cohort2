import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Headerwithbutton />
      <Header title= "my name is Anmoldhdh2" /> 
      <Header title= "my name is AnmolWddd2" /> 
      <Header title= "my name is AnmolddddW2" /> 
      <Header title= "my name is AnmoldddddddW2" /> 
    </>
  )
}


function Headerwithbutton(){
  const[title,setTitle]= useState("my name is AnmolW")
  function updatetitle(){
    setTitle("my name is " + Math.random());
  }


  return <div>
    <button onClick={updatetitle}> Click me to change the title</button>
    <Header title={title} />
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}
export default App
