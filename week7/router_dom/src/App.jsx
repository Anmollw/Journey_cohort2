import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'

const Dashboard = lazy(()=>import('./Pages/dashboard'))
const Landing = lazy(()=> import ('./Pages/landing'))

function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar />
       <Routes>
         <Route path='/dashboard' element = {<Suspense fallback= {"loading..."}><Dashboard /> </Suspense>} />
         <Route path='/' element = {<Suspense fallback= {"loading..."}><Landing /> </Suspense>} />
       </Routes>
      </BrowserRouter>
    </div>
  
  )
}

function Appbar(){
  const navigate= useNavigate();
  return <div>

      <div>
        <button onClick={()=>{
          navigate('/');
        }}>Landing page</button>
        
        <button onClick={()=>{
          navigate('/dashboard');
        }}>Dashboard</button>
      </div>

    </div>
}


export default App
