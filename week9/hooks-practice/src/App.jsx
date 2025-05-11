import { useState ,useEffect } from 'react'
import './App.css'
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [value,setValue] = useState(0);
  const debouncedValue = useDebounce(value,500);
  return (
     <>
      Debounced value is {debouncedValue} <br />
      <input type='text' onChange={e=> setValue(e.target.value)} />
         
    </>
  )
}

export default App
