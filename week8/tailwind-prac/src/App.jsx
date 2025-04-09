
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <div className='grid grid-cols-3'>
       <RevenueCard title={"Amount pending"}  amount={"92,310.79"} orderCount={13}/>
    </div>
  )
}

export default App
